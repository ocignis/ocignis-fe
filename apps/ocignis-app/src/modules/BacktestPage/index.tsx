import { showNotification } from 'ocignis-ui';
import { useState } from 'react';

import { BotBacktestInfoResponse, BotBacktestInstance, ocignisTrpcClient } from 'common/api/ocignis';

import { BacktestView } from './BacktestView';
import { OnBotBacktestCommand } from './BacktestView/components';

export const BacktestPage = () => {
  const [botBacktestInfoResponse, setBotBacktestInfoResponse] = useState<BotBacktestInfoResponse | undefined>(
    undefined,
  );

  const utils = ocignisTrpcClient.useContext();

  const { data: botBacktestInstances } = ocignisTrpcClient.botBacktest.instances.list.useQuery();

  const handleBotBacktestRunMutationSuccess = (botBacktestInfoResponse: BotBacktestInfoResponse) => {
    showNotification({ title: 'Backtest ran successfully.', toastDismissAll: true });

    setBotBacktestInfoResponse(botBacktestInfoResponse);
  };

  const botBacktestRunMutation = ocignisTrpcClient.botBacktest.commands.run.useMutation({
    onSuccess: handleBotBacktestRunMutationSuccess,
  });

  const handleBotBacktestUpsertInstanceMutationSuccess = async (_data: unknown, variable: BotBacktestInstance) => {
    await utils.botBacktest.instances.list.invalidate();

    showNotification({
      title: `Bot backtest instance '${variable.name}' successfully saved.`,
      toastDismissAll: true,
    });
  };

  const botBacktestUpsertInstanceMutation = ocignisTrpcClient.botBacktest.instances.upsert.useMutation({
    onSuccess: handleBotBacktestUpsertInstanceMutationSuccess,
  });

  const handleBotBacktestDestroyInstanceMutationSuccess = async (
    _data: unknown,
    variable: Pick<BotBacktestInstance, 'name'>,
  ) => {
    await utils.botBacktest.instances.list.invalidate();

    showNotification({
      title: `Bot backtest instance '${variable.name}' successfully deleted.`,
    });
  };

  const botBacktestDestroyInstanceMutation = ocignisTrpcClient.botBacktest.instances.destroy.useMutation({
    onSuccess: handleBotBacktestDestroyInstanceMutationSuccess,
  });

  const handleBotBacktestCommand: OnBotBacktestCommand = ({
    command,
    botBacktestConfig,
    isIncluded_data_tradesDataset,
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (command === 'run') {
      showNotification({ title: 'Running backtest.', isLoading: true, showDuration: true });

      botBacktestRunMutation.mutate({ botBacktestConfig, isIncluded_data_tradesDataset });
    }
  };

  return (
    <BacktestView
      botBacktestInfoResponse={botBacktestInfoResponse}
      botBacktestInstances={botBacktestInstances}
      onBotBacktestCommand={handleBotBacktestCommand}
      onUpsertBotBacktestInstance={({ botBacktestInstancePayload }) =>
        botBacktestUpsertInstanceMutation.mutate(botBacktestInstancePayload)
      }
      onDeleteBotBacktestInstance={({ name }) => botBacktestDestroyInstanceMutation.mutate({ name })}
    />
  );
};

import { showNotification } from 'ocignis-ui';

import { BotInstance, ocignisTrpcClient } from 'common/api/ocignis';

import { TradeView } from './TradeView';
import { OnBotCommand } from './TradeView/components';

export const TradePage = () => {
  const utils = ocignisTrpcClient.useContext();

  const { data: botInstances } = ocignisTrpcClient.bot.instances.list.useQuery();

  const handleBotRunMutationSuccess = () => {
    showNotification({ title: 'Bot running.', toastDismissAll: true });
  };

  const botRunMutation = ocignisTrpcClient.bot.commands.run.useMutation({
    onSuccess: handleBotRunMutationSuccess,
  });

  const handleBotStopMutationSuccess = () => {
    showNotification({ title: 'Bot is stopping, please observe status to see when stopped.' });
  };

  const botStopMutation = ocignisTrpcClient.bot.commands.stop.useMutation({
    onSuccess: handleBotStopMutationSuccess,
  });

  const handleBotUpsertInstanceMutationSuccess = async (_data: unknown, variable: BotInstance) => {
    await utils.bot.instances.list.invalidate();

    showNotification({
      title: `Bot instance '${variable.name}' successfully saved.`,
      toastDismissAll: true,
    });
  };

  const botUpsertInstanceMutation = ocignisTrpcClient.bot.instances.upsert.useMutation({
    onSuccess: handleBotUpsertInstanceMutationSuccess,
  });

  const handleBotDestroyInstanceMutationSuccess = async (_data: unknown, variable: Pick<BotInstance, 'name'>) => {
    await utils.bot.instances.list.invalidate();

    showNotification({
      title: `Bot instance '${variable.name}' successfully deleted.`,
    });
  };

  const botDestroyInstanceMutation = ocignisTrpcClient.bot.instances.destroy.useMutation({
    onSuccess: handleBotDestroyInstanceMutationSuccess,
  });

  const handleBotCommand: OnBotCommand = ({ command, botConfig }) => {
    if (command === 'run') {
      showNotification({ title: 'Running bot...', isLoading: true, showDuration: true });

      botRunMutation.mutate({ botConfig });
    }

    if (command === 'stop') {
      botStopMutation.mutate({ botId: 'abcd-1234' });
    }
  };

  return (
    <TradeView
      botInstances={botInstances}
      onBotCommand={handleBotCommand}
      onUpsertBotInstance={({ botInstancePayload }) => botUpsertInstanceMutation.mutate(botInstancePayload)}
      onDeleteBotInstance={({ name }) => botDestroyInstanceMutation.mutate({ name })}
    />
  );
};

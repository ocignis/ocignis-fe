import { Box, CircularProgress } from '@mui/material';
import { Accordion } from 'ocignis-ui';

import { BotInstances } from 'common/api/ocignis';

import { BotConfig, OnUpsertBotInstance, OnDeleteBotInstance, OnBotCommand, BotCommands } from './components';

export type TradeViewProps = {
  botInstances: BotInstances | undefined;
  onBotCommand: OnBotCommand;
  onUpsertBotInstance: OnUpsertBotInstance;
  onDeleteBotInstance: OnDeleteBotInstance;
};

export const TradeView = ({ botInstances, onBotCommand, onUpsertBotInstance, onDeleteBotInstance }: TradeViewProps) => {
  if (!botInstances) {
    return <CircularProgress size="30px" />;
  }

  return (
    <Box>
      <Accordion summaryTitle="Config" defaultExpanded={true}>
        <BotConfig
          botInstances={botInstances}
          onUpsertBotInstance={onUpsertBotInstance}
          onDeleteBotInstance={onDeleteBotInstance}
        />
      </Accordion>
      <Accordion summaryTitle="Commands" defaultExpanded={true}>
        <BotCommands botInstances={botInstances} onBotCommand={onBotCommand} />
      </Accordion>
    </Box>
  );
};

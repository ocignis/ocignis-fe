import { RocketLaunch as RocketLaunchIcon, StopCircle as StopCircleIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Button } from 'ocignis-ui';
import { useEffect, useState } from 'react';

import { BotConfig, BotInstances } from 'common/api/ocignis';
import { Select } from 'common/components';

export type OnBotCommand = ({ command, botConfig }: { command: 'run' | 'stop'; botConfig: BotConfig }) => void;

export type BotCommandsProps = {
  botInstances: BotInstances;
  onBotCommand: OnBotCommand;
};

export const BotCommands = ({ botInstances, onBotCommand }: BotCommandsProps) => {
  const [instanceNameSelected, setInstanceNameSelected] = useState<string>(botInstances[0] ? botInstances[0].name : '');

  const botInstancesStringified = JSON.stringify(botInstances);

  useEffect(() => {
    const selectedInstance = botInstances.find((botInstance) => botInstance.name === instanceNameSelected);

    setInstanceNameSelected(selectedInstance?.name ?? '');
  }, [instanceNameSelected, botInstances, botInstancesStringified]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      <Select
        label="Instance"
        value={instanceNameSelected}
        isFullWidth={false}
        items={botInstances.map((botInstance) => ({
          value: botInstance.name,
          title: botInstance.name,
        }))}
        onChange={setInstanceNameSelected}
        sx={{ mr: 1, mt: 1, minWidth: '160px', maxWidth: '160px' }}
        addLabelMargin={false}
      />
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            if (!instanceNameSelected) {
              return;
            }

            const selectedInstance = botInstances.find((botInstance) => botInstance.name === instanceNameSelected);

            if (!selectedInstance) {
              return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { name, description, ...botConfig } = selectedInstance;

            onBotCommand({ command: 'run', botConfig });
          }}
          icon={<RocketLaunchIcon />}
          sx={{ mr: 1, mt: 1, minWidth: '160px', maxWidth: '160px' }}
        >
          Run
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (!instanceNameSelected) {
              return;
            }

            const selectedInstance = botInstances.find((botInstance) => botInstance.name === instanceNameSelected);

            if (!selectedInstance) {
              return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { name, description, ...botConfig } = selectedInstance;

            onBotCommand({ command: 'stop', botConfig });
          }}
          icon={<StopCircleIcon />}
          sx={{ mt: 1, minWidth: '160px', maxWidth: '160px' }}
        >
          Stop
        </Button>
      </Box>
    </Box>
  );
};

import { RocketLaunch as RocketLaunchIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Button } from 'ocignis-ui';
import { useEffect, useState } from 'react';

import { BotBacktestConfig, BotBacktestInstances } from 'common/api/ocignis';
import { Select, Checkbox } from 'common/components';

export type OnBotBacktestCommand = ({
  command,
  botBacktestConfig,
  isIncluded_data_tradesDataset,
}: {
  command: 'run';
  botBacktestConfig: BotBacktestConfig;
  isIncluded_data_tradesDataset: boolean;
}) => void;

export type BotBacktestCommandsProps = {
  botBacktestInstances: BotBacktestInstances;
  onBotBacktestCommand: OnBotBacktestCommand;
};

export const BotBacktestCommands = ({ botBacktestInstances, onBotBacktestCommand }: BotBacktestCommandsProps) => {
  const [instanceNameSelected, setInstanceNameSelected] = useState<string>(
    botBacktestInstances[0] ? botBacktestInstances[0].name : '',
  );

  const [isIncluded_data_tradesDataset, setIsIncluded_data_tradesDataset] = useState(false);

  const botBacktestInstancesStringified = JSON.stringify(botBacktestInstances);

  useEffect(() => {
    const selectedInstance = botBacktestInstances.find((botInstance) => botInstance.name === instanceNameSelected);

    setInstanceNameSelected(selectedInstance?.name ?? '');
  }, [instanceNameSelected, botBacktestInstances, botBacktestInstancesStringified]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      <Select
        label="Instance"
        value={instanceNameSelected}
        isFullWidth={false}
        items={botBacktestInstances.map((botInstance) => ({
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

            const selectedInstance = botBacktestInstances.find(
              (botBacktestInstance) => botBacktestInstance.name === instanceNameSelected,
            );

            if (!selectedInstance) {
              return;
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { name, description, ...botBacktestConfig } = selectedInstance;

            onBotBacktestCommand({ command: 'run', botBacktestConfig, isIncluded_data_tradesDataset });
          }}
          icon={<RocketLaunchIcon />}
          sx={{ mr: 1, mt: 1, minWidth: '160px', maxWidth: '160px' }}
        >
          Run
        </Button>
        <Checkbox
          label="Include 'data' field in response"
          value={isIncluded_data_tradesDataset}
          onChange={setIsIncluded_data_tradesDataset}
          sx={{ mr: 1, mt: 1 }}
        />
      </Box>
    </Box>
  );
};

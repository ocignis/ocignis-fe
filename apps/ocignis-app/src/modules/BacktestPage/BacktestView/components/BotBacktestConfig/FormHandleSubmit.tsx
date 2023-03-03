import { Save as SaveIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Button } from 'ocignis-ui';
import { useState, useEffect } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { BotBacktestInstance, BotBacktestInstances } from 'common/api/ocignis';
import { Select } from 'common/components';

import { FormDataBotBacktestConfig } from '.';

export type OnUpsertBotBacktestInstance = ({
  botBacktestInstancePayload,
}: {
  botBacktestInstancePayload: BotBacktestInstance;
}) => void;

export type OnDeleteBotBacktestInstance = ({ name }: { name: BotBacktestInstance['name'] }) => void;

export type FormHandleSubmitProps = {
  botBacktestInstances: BotBacktestInstances;
  onUpsertBotBacktestInstance: OnUpsertBotBacktestInstance;
  onDeleteBotBacktestInstance: OnDeleteBotBacktestInstance;
};

export const FormHandleSubmit = ({
  botBacktestInstances,
  onUpsertBotBacktestInstance,
  onDeleteBotBacktestInstance,
}: FormHandleSubmitProps) => {
  const { handleSubmit, reset } = useFormContext<FormDataBotBacktestConfig>();

  const [instanceNameSelected, setInstanceNameSelected] = useState<string>(
    botBacktestInstances[0] ? botBacktestInstances[0].name : '',
  );

  const handleUpsertBotBacktestInstance: SubmitHandler<FormDataBotBacktestConfig> = (data) => {
    onUpsertBotBacktestInstance({ botBacktestInstancePayload: data });
  };

  const handleDeleteBotBacktestInstance = () => {
    onDeleteBotBacktestInstance({ name: instanceNameSelected });

    const isLastInstanceDeleted = botBacktestInstances.length === 1;
    if (isLastInstanceDeleted) {
      setInstanceNameSelected('');
    }

    const firstInstanceButNotDeleted =
      botBacktestInstances[0].name !== instanceNameSelected
        ? botBacktestInstances[0].name
        : botBacktestInstances[1].name;

    setInstanceNameSelected(firstInstanceButNotDeleted);
  };

  const botBacktestInstancesStringified = JSON.stringify(botBacktestInstances);

  useEffect(() => {
    const selectedInstance = botBacktestInstances.find(
      (botBacktestInstance) => botBacktestInstance.name === instanceNameSelected,
    );

    reset(selectedInstance);
  }, [reset, instanceNameSelected, botBacktestInstances, botBacktestInstancesStringified]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Select
          label="Instance"
          value={instanceNameSelected}
          isFullWidth={false}
          items={botBacktestInstances.map(({ name }) => ({
            value: name,
            title: name,
          }))}
          onChange={setInstanceNameSelected}
          sx={{ mr: 1, mt: 1, minWidth: '160px', maxWidth: '160px' }}
          addLabelMargin={false}
        />
        <Box>
          <Button
            variant="contained"
            onClick={() => void handleSubmit(handleUpsertBotBacktestInstance)()}
            icon={<SaveIcon />}
            sx={{ mr: 1, mt: 1, minWidth: '160px', maxWidth: '160px' }}
          >
            Save Instance
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDeleteBotBacktestInstance()}
            icon={<DeleteIcon />}
            sx={{ mr: 1, mt: 1, minWidth: '160px', maxWidth: '160px' }}
          >
            Delete Instance
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

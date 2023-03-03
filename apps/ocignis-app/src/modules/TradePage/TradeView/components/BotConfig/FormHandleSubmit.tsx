import { Save as SaveIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Button } from 'ocignis-ui';
import { useState, useEffect } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { BotInstance, BotInstances } from 'common/api/ocignis';
import { Select } from 'common/components';

import { FormDataBotConfig } from '.';

export type OnUpsertBotInstance = ({ botInstancePayload }: { botInstancePayload: BotInstance }) => void;

export type OnDeleteBotInstance = ({ name }: { name: BotInstance['name'] }) => void;

export type FormHandleSubmitProps = {
  botInstances: BotInstances;
  onUpsertBotInstance: OnUpsertBotInstance;
  onDeleteBotInstance: OnDeleteBotInstance;
};

export const FormHandleSubmit = ({ botInstances, onUpsertBotInstance, onDeleteBotInstance }: FormHandleSubmitProps) => {
  const { handleSubmit, reset } = useFormContext<FormDataBotConfig>();

  const [instanceNameSelected, setInstanceNameSelected] = useState<string>(botInstances[0] ? botInstances[0].name : '');

  const handleUpsertBotInstance: SubmitHandler<FormDataBotConfig> = (data) => {
    onUpsertBotInstance({ botInstancePayload: data });
  };

  const handleDeleteBotInstance = () => {
    onDeleteBotInstance({ name: instanceNameSelected });

    const isLastInstanceDeleted = botInstances.length === 1;
    if (isLastInstanceDeleted) {
      setInstanceNameSelected('');
    }

    const firstInstanceButNotDeleted =
      botInstances[0].name !== instanceNameSelected ? botInstances[0].name : botInstances[1].name;

    setInstanceNameSelected(firstInstanceButNotDeleted);
  };

  const botInstancesStringified = JSON.stringify(botInstances);

  useEffect(() => {
    const selectedInstance = botInstances.find((botInstance) => botInstance.name === instanceNameSelected);

    reset(selectedInstance);
  }, [reset, instanceNameSelected, botInstances, botInstancesStringified]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      <Select
        label="Instance"
        value={instanceNameSelected}
        isFullWidth={false}
        items={botInstances.map(({ name }) => ({
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
          onClick={() => void handleSubmit(handleUpsertBotInstance)()}
          icon={<SaveIcon />}
          sx={{ mr: 1, mt: 1, minWidth: '160px', maxWidth: '160px' }}
        >
          Save Instance
        </Button>
        <Button
          variant="contained"
          onClick={() => handleDeleteBotInstance()}
          icon={<DeleteIcon />}
          sx={{ mt: 1, minWidth: '160px', maxWidth: '160px' }}
        >
          Delete Instance
        </Button>
      </Box>
    </Box>
  );
};

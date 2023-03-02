import { zodResolver } from '@hookform/resolvers/zod';
import { Box, styled } from '@mui/material';
import { BlockInfo } from 'ocignis-ui';
import { useForm, FormProvider } from 'react-hook-form';

import { BotInstance, BotInstanceSchema } from 'common/api/ocignis';

import { FormBotInstance } from './FormBotInstance';
import { FormHandleSubmit, FormHandleSubmitProps } from './FormHandleSubmit';
import { FormStrategyConfig } from './FormStrategyConfig';
import { FormStrategyName } from './FormStrategyName';
import { FormStrategySpecificConfig } from './FormStrategySpecificConfig';

export type { OnUpsertBotInstance, OnDeleteBotInstance } from './FormHandleSubmit';

export type FormDataBotConfig = BotInstance;

export type BotConfigProps = FormHandleSubmitProps;

export const BotConfig = ({ botInstances, onUpsertBotInstance, onDeleteBotInstance }: BotConfigProps) => {
  const methods = useForm<FormDataBotConfig>({
    resolver: zodResolver(BotInstanceSchema),
  });

  return (
    <FormProvider {...methods}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <BlockInfoStyled title="Instance">
          <FormBotInstance />
        </BlockInfoStyled>
        <BlockInfoStyled title="Strategy Name">
          <FormStrategyName />
        </BlockInfoStyled>
        <BlockInfoStyled title="Strategy Config">
          <FormStrategyConfig />
        </BlockInfoStyled>
        <BlockInfoStyled title="Strategy Specific Config">
          <FormStrategySpecificConfig />
        </BlockInfoStyled>
      </Box>
      <FormHandleSubmit
        botInstances={botInstances}
        onUpsertBotInstance={onUpsertBotInstance}
        onDeleteBotInstance={onDeleteBotInstance}
      />
    </FormProvider>
  );
};

const BlockInfoStyled = styled(BlockInfo)({
  flexGrow: 1,
  minWidth: '290px',
  maxWidth: '290px',
  marginRight: '8px',
  marginBottom: '8px',
});

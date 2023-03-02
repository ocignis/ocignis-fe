import { zodResolver } from '@hookform/resolvers/zod';
import { Box, styled } from '@mui/material';
import { BlockInfo } from 'ocignis-ui';
import { useForm, FormProvider } from 'react-hook-form';

import { BotBacktestInstance, BotBacktestInstanceSchema } from 'common/api/ocignis';

import { FormBacktestConfig } from './FormBacktestConfig';
import { FormBotBacktestInstance } from './FormBotBacktestInstance';
import { FormHandleSubmit, FormHandleSubmitProps } from './FormHandleSubmit';
import { FormStrategyConfig } from './FormStrategyConfig';
import { FormStrategyName } from './FormStrategyName';
import { FormStrategySpecificConfig } from './FormStrategySpecificConfig';

export type { OnUpsertBotBacktestInstance, OnDeleteBotBacktestInstance } from './FormHandleSubmit';

export type FormDataBotBacktestConfig = BotBacktestInstance;

export type BotBacktestConfigProps = FormHandleSubmitProps;

export const BotBacktestConfig = ({
  botBacktestInstances,
  onUpsertBotBacktestInstance,
  onDeleteBotBacktestInstance,
}: BotBacktestConfigProps) => {
  const methods = useForm<FormDataBotBacktestConfig>({
    resolver: zodResolver(BotBacktestInstanceSchema),
  });

  return (
    <FormProvider {...methods}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <BlockInfoStyled title="Instance">
          <FormBotBacktestInstance />
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
        <BlockInfoStyled title="Backtest Config">
          <FormBacktestConfig />
        </BlockInfoStyled>
      </Box>
      <FormHandleSubmit
        botBacktestInstances={botBacktestInstances}
        onUpsertBotBacktestInstance={onUpsertBotBacktestInstance}
        onDeleteBotBacktestInstance={onDeleteBotBacktestInstance}
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

import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import { Accordion } from 'ocignis-ui';

import { BotBacktestInfoResponse, BotBacktestInstances } from 'common/api/ocignis';

import {
  BacktestChartWrapper,
  BacktestReportClosedPositions,
  BacktestReportStats,
  BotBacktestConfig,
  BotBacktestCommands,
  OnUpsertBotBacktestInstance,
  OnDeleteBotBacktestInstance,
  OnBotBacktestCommand,
} from './components';

export type BacktestViewProps = {
  botBacktestInfoResponse: BotBacktestInfoResponse | undefined;
  botBacktestInstances: BotBacktestInstances | undefined;
  onBotBacktestCommand: OnBotBacktestCommand;
  onUpsertBotBacktestInstance: OnUpsertBotBacktestInstance;
  onDeleteBotBacktestInstance: OnDeleteBotBacktestInstance;
};

export const BacktestView = ({
  botBacktestInfoResponse,
  botBacktestInstances,
  onBotBacktestCommand,
  onUpsertBotBacktestInstance,
  onDeleteBotBacktestInstance,
}: BacktestViewProps) => {
  if (!botBacktestInstances) {
    return <CircularProgress size="30px" />;
  }

  return (
    <Box>
      {process.env.NEXT_PUBLIC_NODE_ENV === 'production' && (
        <Alert severity="warning" variant="standard" sx={{ mb: 1 }}>
          Backtest should not run in {process.env.NEXT_PUBLIC_NODE_ENV} mode.
        </Alert>
      )}
      <Accordion summaryTitle="Config" defaultExpanded={true}>
        <BotBacktestConfig
          botBacktestInstances={botBacktestInstances}
          onUpsertBotBacktestInstance={onUpsertBotBacktestInstance}
          onDeleteBotBacktestInstance={onDeleteBotBacktestInstance}
        />
      </Accordion>
      <Accordion summaryTitle="Commands" defaultExpanded={true}>
        <BotBacktestCommands botBacktestInstances={botBacktestInstances} onBotBacktestCommand={onBotBacktestCommand} />
      </Accordion>
      {!botBacktestInfoResponse ? (
        <Typography variant="controlInactive">Backtesting report will appear after successful execution.</Typography>
      ) : (
        <>
          <Accordion summaryTitle="Report - Stats" defaultExpanded={true}>
            <BacktestReportStats stats={botBacktestInfoResponse.stats} />
          </Accordion>
          <Accordion
            summaryTitle={`Report - Closed Positions (${botBacktestInfoResponse.data.positionsClosed.length})`}
            defaultExpanded={true}
          >
            <BacktestReportClosedPositions positionsClosed={botBacktestInfoResponse.data.positionsClosed} />
          </Accordion>
          <Accordion summaryTitle="Report - Chart" defaultExpanded={true}>
            <BacktestChartWrapper
              symbolPair={botBacktestInfoResponse.stats.strategyConfig.symbolPair}
              tradesDataset={botBacktestInfoResponse.data.tradesDataset}
              positionsClosed={botBacktestInfoResponse.data.positionsClosed}
            />
          </Accordion>
        </>
      )}
    </Box>
  );
};

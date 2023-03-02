import { Box, SxProps } from '@mui/material';
import { BlockData } from 'ocignis-ui';

import { BotBacktestInfoResponse } from 'common/api/ocignis';

export type BacktestReportStatsProps = {
  stats: BotBacktestInfoResponse['stats'];
};

const SX_BLOCK_DATA: SxProps = { minWidth: '310px', mr: 0.5, mt: 0.5 };

export const BacktestReportStats = ({ stats }: BacktestReportStatsProps) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <BlockData title="Strategy Config" blockObject={stats.strategyConfig} sx={SX_BLOCK_DATA} />
      <BlockData title="Bot Execution Time" blockObject={stats.botExecutionTime} sx={SX_BLOCK_DATA} />
      <BlockData title="Market" blockObject={stats.market} sx={SX_BLOCK_DATA} />
      <BlockData title="Time" blockObject={stats.time} sx={SX_BLOCK_DATA} />
      <BlockData title="Balance" blockObject={stats.balance} sx={SX_BLOCK_DATA} />
      <BlockData title="Trading Stats" blockObject={stats.tradingStats} sx={SX_BLOCK_DATA} />
    </Box>
  );
};

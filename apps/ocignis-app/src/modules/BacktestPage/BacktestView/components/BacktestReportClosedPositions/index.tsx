import { Box } from '@mui/material';

import { BotBacktestInfoResponse } from 'common/api/ocignis';

import { ClosedPositionsTable } from './ClosedPositionsTable';

export type BacktestReportClosedPositionsProps = {
  positionsClosed: BotBacktestInfoResponse['data']['positionsClosed'];
};

export const BacktestReportClosedPositions = ({ positionsClosed }: BacktestReportClosedPositionsProps) => {
  return (
    <Box>
      <ClosedPositionsTable positionsClosed={positionsClosed} />
    </Box>
  );
};

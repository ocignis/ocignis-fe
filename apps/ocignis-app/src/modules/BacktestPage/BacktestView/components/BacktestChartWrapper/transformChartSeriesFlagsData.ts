import { roundTo } from 'ocignis-utils';

import { BotBacktestInfoResponse } from 'common/api/ocignis';
import { ChartSeriesFlagsData } from 'common/components';

type TransformChartSeriesFlagsDataParams = {
  positionsClosed: BotBacktestInfoResponse['data']['positionsClosed'];
};

export const transformChartSeriesFlagsData = ({
  positionsClosed,
}: TransformChartSeriesFlagsDataParams): ChartSeriesFlagsData => {
  const chartSeriesFlagsData = positionsClosed.map((positionClosed) => {
    const chartSeriesFlagsDataOpen: ChartSeriesFlagsData[number] = {
      x: positionClosed.entryTime,
      text: `Entry order type: ${positionClosed.entryOrderType}`,
      title: 'OPEN',
      color: '#3a3e45',
      fillColor: '#70A1D7',
    };

    const chartSeriesFlagsDataClose: ChartSeriesFlagsData[number] = {
      x: positionClosed.exitTime,
      text: `Position type: ${positionClosed.positionType} | Order type: ${
        positionClosed.exitOrderType
      } | ROI: ${roundTo(positionClosed.roiRelative)}%/${roundTo(positionClosed.roiAbsolute)}`,
      title: 'CLOSE',
      color: '#3a3e45',
      fillColor: positionClosed.roiRelative >= 0 ? '#A1DE93' : '#F47C7C',
    };

    return [chartSeriesFlagsDataOpen, chartSeriesFlagsDataClose];
  });

  return chartSeriesFlagsData.flat();
};

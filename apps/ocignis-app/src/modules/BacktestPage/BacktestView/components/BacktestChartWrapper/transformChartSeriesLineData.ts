import { BotBacktestInfoResponse } from 'common/api/ocignis';
import { ChartSeriesLineData } from 'common/components';

type TransformChartSeriesLineDataParams = {
  tradesDataset: BotBacktestInfoResponse['data']['tradesDataset'];
};

export const transformChartSeriesLineData = ({
  tradesDataset,
}: TransformChartSeriesLineDataParams): ChartSeriesLineData => {
  const chartSeriesLineData = tradesDataset.map((trade) => {
    const chartSeriesLineDataSingleValue: ChartSeriesLineData[number] = [trade.time, trade.price];
    return chartSeriesLineDataSingleValue;
  });

  return chartSeriesLineData;
};

import { BotBacktestInfoResponse, SymbolPair } from 'common/api/ocignis';
import { Chart } from 'common/components';

import { transformChartSeriesFlagsData } from './transformChartSeriesFlagsData';
import { transformChartSeriesLineData } from './transformChartSeriesLineData';

export type BacktestChartWrapperProps = {
  symbolPair: SymbolPair;
  tradesDataset: BotBacktestInfoResponse['data']['tradesDataset'];
  positionsClosed: BotBacktestInfoResponse['data']['positionsClosed'];
};

export const BacktestChartWrapper = ({ symbolPair, tradesDataset, positionsClosed }: BacktestChartWrapperProps) => {
  return (
    <Chart
      chartSeries={[
        {
          id: symbolPair,
          name: symbolPair,
          chartSeriesLineData: transformChartSeriesLineData({
            tradesDataset,
          }),
          chartSeriesFlagsData: transformChartSeriesFlagsData({
            positionsClosed,
          }),
          indicators: [
            // {
            //   type: 'sma',
            //   linkedTo: symbolPair,
            //   params: {
            //     period: 3,
            //   },
            // },
            // {
            //   type: 'ema',
            //   linkedTo: symbolPair,
            //   params: {
            //     period: 3,
            //   },
            // },
            // {
            //   type: 'macd',
            //   linkedTo: symbolPair,
            //   params: {
            //     shortPeriod: 3,
            //     longPeriod: 6,
            //     signalPeriod: 2,
            //     period: 15,
            //   },
            // },
          ],
        },
      ]}
    />
  );
};

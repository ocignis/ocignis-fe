import { Story, Meta } from '@storybook/react';
import { Button } from 'ocignis-ui/src/Button/index';
import { useState } from 'react';

import { ChartSeriesLineData } from './makeHighChartsStockSeries/makeSeriesSingle';
import { mockChartSeriesFlagsData, mockChartSeriesLineData } from './mockChartSeriesData';

import { Chart, ChartProps } from '.';

export default {
  component: Chart,
  title: 'Chart',
} as Meta;

const base: ChartProps = {
  chartSeries: [
    {
      id: 'dataset-1min-klines',
      name: 'BTCBUSD',
      chartSeriesLineData: mockChartSeriesLineData,
      chartSeriesFlagsData: mockChartSeriesFlagsData,
      indicators: [],
    },
  ],
};

const Template: Story<ChartProps> = (args) => <Chart {...base} {...args} />;

export const Default = Template.bind({});

export const TwoCharts = Template.bind({});
const TwoChartsArgs: ChartProps = {
  ...base,
  chartSeries: [
    {
      id: 'dataset-1min-klines',
      name: 'BTCBUSD',
      chartSeriesLineData: mockChartSeriesLineData,
      chartSeriesFlagsData: mockChartSeriesFlagsData,
      indicators: [],
    },
    {
      id: 'dataset-1day-klines',
      name: `ETHBUSD`,
      chartSeriesLineData: mockChartSeriesLineData.map(([time, value]) => [time, value * 0.9]),
      chartSeriesFlagsData: mockChartSeriesFlagsData.map((mockChartSeriesFlagData) => ({
        ...mockChartSeriesFlagData,
        x: mockChartSeriesFlagData.x + 5000000000,
      })),
      indicators: [],
    },
  ],
};
TwoCharts.args = TwoChartsArgs;

const ChartsSimulationAndIndicatorWrapper = () => {
  const [dataset_BTCBUSD, setDataset_BTCBUSD] = useState<ChartSeriesLineData>([]);
  const [dataset_ETHBUSD, setDataset_ETHBUSD] = useState<ChartSeriesLineData>([]);

  const handleGetBacktest = () => {
    setDataset_BTCBUSD(mockChartSeriesLineData.map(([time, value]) => [time, value * Math.random()]));
    setDataset_ETHBUSD(mockChartSeriesLineData.map(([time, value]) => [time, value * Math.random()]));
  };

  return (
    <>
      <Chart
        chartSeries={[
          {
            id: 'dataset-1min-klines',
            name: 'BTCBUSD',
            chartSeriesLineData: dataset_BTCBUSD,
            chartSeriesFlagsData: mockChartSeriesFlagsData,
            indicators: [],
          },
          {
            id: 'dataset-1day-klines',
            name: 'ETHBUSD',
            chartSeriesLineData: dataset_ETHBUSD,
            chartSeriesFlagsData: mockChartSeriesFlagsData,
            // Bigger amount of data needed, to calculate and show indicators
            indicators: [
              {
                type: 'sma',
                linkedTo: 'ETHBUSD',
                params: {
                  period: 2,
                },
              },
              // {
              //   type: 'ema',
              //   linkedTo: 'ETHBUSD',
              //   params: {
              //     period: 3,
              //   },
              // },
              // {
              //   type: 'macd',
              //   linkedTo: 'ETHBUSD',
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
      <Button onClick={handleGetBacktest}>Run Backtest</Button>
    </>
  );
};

export const ChartsSimulationAndIndicators = ChartsSimulationAndIndicatorWrapper.bind({});

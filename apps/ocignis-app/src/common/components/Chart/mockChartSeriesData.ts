import { ChartSeriesLineData, ChartSeriesFlagsData } from 'common/components';

export const mockChartSeriesLineData: ChartSeriesLineData = [
  [1638474774000, 16053.4323],
  [1644954774000, 16121.5456],
  [1647978774000, 16014.9433],
  [1656273174000, 16648.3221],
  [1660506774000, 15175.6542],
  [1660679574000, 17032.2388],
  [1668973974000, 16877.1286],
  [1669492374000, 16877.1286],
];

export const mockChartSeriesFlagsData: ChartSeriesFlagsData = [
  {
    x: mockChartSeriesLineData[0][0],
    title: 'OPEN',
    text: 'Some event with a description',
    color: '#3a3e45',
    fillColor: '#70A1D7',
  },
  {
    x: mockChartSeriesLineData[1][0],
    title: 'CLOSE',
    text: 'Some event with a description',
    color: '#3a3e45',
    fillColor: '#F47C7C',
  },
  {
    x: mockChartSeriesLineData[2][0],
    title: 'OPEN',
    text: 'Some event with a description',
    color: '#3a3e45',
    fillColor: '#70A1D7',
  },
  {
    x: mockChartSeriesLineData[3][0],
    title: 'CLOSE',
    text: 'Some event with a description',
    color: '#3a3e45',
    fillColor: '#A1DE93',
  },
  {
    x: mockChartSeriesLineData[4][0],
    title: 'OPEN',
    text: 'Some event with a description',
    color: '#3a3e45',
    fillColor: '#70A1D7',
  },
  {
    x: mockChartSeriesLineData[5][0],
    title: 'CLOSE',
    text: 'Some event with a description',
    color: '#3a3e45',
    fillColor: '#A1DE93',
  },
];

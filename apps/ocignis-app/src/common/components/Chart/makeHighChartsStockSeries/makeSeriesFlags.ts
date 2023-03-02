import { SeriesFlagsOptions } from 'highcharts/highstock';

// The type for SeriesLineOptions data is to wide for our use case.
// export type ChartSeriesFlagsData = NonNullable<SeriesFlagsOptions['data']>;
// We only pick properties for our use case from PointOptionsObject type.
type ChartSeriesFlagsDataAllSingular = NonNullable<SeriesFlagsOptions['data']>[number];

type ChartSeriesFlagsDataSingular = Required<
  Pick<ChartSeriesFlagsDataAllSingular, 'x' | 'text' | 'title' | 'color' | 'fillColor'>
>;

type ChartSeriesFlagsDataSingularCustomOpen = ChartSeriesFlagsDataSingular & {
  title: 'OPEN';
  color: '#3a3e45';
  fillColor: '#70A1D7';
};

type ChartSeriesFlagsDataSingularCustomClose = ChartSeriesFlagsDataSingular & {
  title: 'CLOSE';
  color: '#3a3e45';
  fillColor: '#A1DE93' | '#F47C7C';
};

type ChartSeriesFlagsDataSingularCustom =
  | ChartSeriesFlagsDataSingularCustomOpen
  | ChartSeriesFlagsDataSingularCustomClose;
export type ChartSeriesFlagsData = Array<ChartSeriesFlagsDataSingularCustom>;

export type MakeSeriesFlagsParams = {
  id: string;
  chartSeriesFlagsData: ChartSeriesFlagsData;
};

export const makeSeriesFlags = ({ id, chartSeriesFlagsData }: MakeSeriesFlagsParams): SeriesFlagsOptions => ({
  type: 'flags',
  data: chartSeriesFlagsData,
  onSeries: id,
  shape: 'squarepin',
  width: 35,
});

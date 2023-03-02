import { SeriesLineOptions } from 'highcharts/highstock';

// The type for SeriesLineOptions data is to wide for our use case.
// export type ChartSeriesLineData = NonNullable<SeriesLineOptions['data']>;
// In the typescript docs definition its explained how each of the union options can be used:
// data?: Array<(number|[(number|string), (number|null)]|null|PointOptionsObject)>;
// Thats why we define our own type, in scope of SeriesLineOptions data union options of course.
/**
 * Inner Array:
 * * First index - x axis value (Unix Time)
 * * Second index - y axis value
 */
export type ChartSeriesLineData = Array<[number, number]>;

export type MakeSeriesSingleParams = {
  id: string;
  name: string;
  chartSeriesLineData: ChartSeriesLineData;
};

export const makeSeriesSingle = ({ id, name, chartSeriesLineData }: MakeSeriesSingleParams): SeriesLineOptions => ({
  type: 'line',
  id,
  name,
  data: chartSeriesLineData,
});

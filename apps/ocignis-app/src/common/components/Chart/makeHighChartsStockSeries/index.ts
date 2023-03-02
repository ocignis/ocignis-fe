import {
  SeriesOptionsType,
  SeriesSmaOptions,
  SeriesEmaOptions,
  SeriesMacdOptions,
  SeriesBbOptions,
  SeriesIkhOptions,
  SeriesRsiOptions,
  SeriesStochasticOptions,
} from 'highcharts/highstock';

import { makeSeriesFlags, MakeSeriesFlagsParams } from './makeSeriesFlags';
import { makeSeriesSingle, MakeSeriesSingleParams } from './makeSeriesSingle';

export type ChartSeriesSingular = MakeSeriesSingleParams &
  MakeSeriesFlagsParams & {
    // 7 popular technical indicators - https://www.highcharts.com/blog/tutorials/7-popular-technical-indicators/
    indicators: Array<
      | SeriesSmaOptions
      | SeriesEmaOptions
      | SeriesMacdOptions
      | SeriesBbOptions
      | SeriesIkhOptions
      | SeriesRsiOptions
      | SeriesStochasticOptions
    >;
  };

export type ChartSeries = ReadonlyArray<ChartSeriesSingular>;

type GetSeriesParams = ChartSeries;

export const makeHighChartsStockSeries = (params: GetSeriesParams): Array<SeriesOptionsType> => {
  const seriesNested = params.map(({ id, name, chartSeriesLineData, chartSeriesFlagsData, indicators }) => {
    const seriesOptionsType: Array<SeriesOptionsType> = [
      makeSeriesSingle({ id, name, chartSeriesLineData }),
      makeSeriesFlags({ id, chartSeriesFlagsData }),
      ...indicators,
    ];

    return seriesOptionsType;
  });

  const series = seriesNested.flat();
  return series;
};

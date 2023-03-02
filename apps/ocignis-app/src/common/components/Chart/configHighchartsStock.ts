// API docs - https://api.highcharts.com/highstock/

import { ChartSeries, makeHighChartsStockSeries } from './makeHighChartsStockSeries';

type ConfigHighchartsStockParams = {
  chartSeries: ChartSeries;
  valueDecimals?: number;
};

export const configHighchartsStock = ({
  chartSeries,
  valueDecimals = 2,
}: ConfigHighchartsStockParams): Highcharts.Options => ({
  accessibility: {
    enabled: false,
  },
  tooltip: {
    valueDecimals,
    shared: true,
  },
  time: {
    // Advantages of using UTC is that the time displays equally regardless of the user agent's time zone settings.
    // Local time can be used when the data is loaded in real time or when correct Daylight Saving Time transitions are required.
    useUTC: true,
  },
  yAxis: {
    title: {
      text: 'Price (close)',
    },
  },
  series: makeHighChartsStockSeries(chartSeries),

  // How can I get the best performance out of Highcharts?
  // https://www.highcharts.com/docs/getting-started/frequently-asked-questions#how-can-i-get-the-best-performance-out-of-highcharts
  boost: {
    enabled: true,
    seriesThreshold: 1,
    allowForce: true,
    debug: {
      // showSkipSummary: true,
      // timeRendering: true,
    },
  },
  plotOptions: {
    series: {
      boostThreshold: 1,
      // Stock charts have enabled data grouping feature by default which changes data behaviour, you need to disable that feature.
      // https://github.com/highcharts/highcharts-react/issues/327#issuecomment-933274620
      dataGrouping: {
        enabled: false,
        groupPixelWidth: 2, // defaults to 2
      },
    },
    // https://api.highcharts.com/highstock/plotOptions.flags
    // flags: {
    //   allowOverlapX: false,
    //   animationLimit: Infinity,
    //   boostThreshold: 1,
    // },
    column: {
      animation: false,
    },
  },
});

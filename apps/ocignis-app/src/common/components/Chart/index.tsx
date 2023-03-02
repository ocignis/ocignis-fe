import { Box } from '@mui/material';
import HighchartsStock from 'highcharts/highstock';
// import HighchartsBb from 'highcharts/indicators/bollinger-bands';
import HighchartsEma from 'highcharts/indicators/ema';
import HighchartsIndicators from 'highcharts/indicators/indicators';
import HighchartsMacd from 'highcharts/indicators/macd';
import HighchartsPivotPoints from 'highcharts/indicators/pivot-points';
import HighchartsRsi from 'highcharts/indicators/rsi';
import HighchartsBoost from 'highcharts/modules/boost';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

import { configHighchartsStock } from './configHighchartsStock';
import { ChartSeries, makeHighChartsStockSeries } from './makeHighChartsStockSeries';

export type { ChartSeriesSingular, ChartSeries } from './makeHighChartsStockSeries';
export type { ChartSeriesLineData } from './makeHighChartsStockSeries/makeSeriesSingle';
export type { ChartSeriesFlagsData } from './makeHighChartsStockSeries/makeSeriesFlags';

// Highcharts with NextJS https://github.com/highcharts/highcharts-react#highcharts-with-nextjs
if (typeof HighchartsStock === 'object') {
  // Load Highcharts modules
  HighchartsBoost(HighchartsStock);
  HighchartsExporting(HighchartsStock);

  // HighchartsBb(HighchartsStock);
  HighchartsEma(HighchartsStock);
  HighchartsIndicators(HighchartsStock);
  HighchartsMacd(HighchartsStock);
  HighchartsPivotPoints(HighchartsStock);
  HighchartsRsi(HighchartsStock);
}

export type ChartProps = {
  chartSeries: ChartSeries;
};

export const Chart = ({ chartSeries }: ChartProps) => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>(configHighchartsStock({ chartSeries }));

  useEffect(() => {
    setChartOptions({ series: makeHighChartsStockSeries(chartSeries) });
  }, [chartSeries]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <HighchartsReact highcharts={HighchartsStock} options={chartOptions} constructorType={'stockChart'} />
    </Box>
  );
};

// ##### Note

// // Proper way would be to always update just part of state that needs to be update, and not mutate the rest of the state.
// useEffect(() => {
//   setChartOptions((prevState) => ({ ...prevState, series: [{ type: 'line', data: dataset }] }));
// }, [dataset]);
// // However for performance reasons Highcharts are mutating data in passed props directly, thats why we update state directly.
// // https://github.com/highcharts/highcharts-react#why-highcharts-mutates-my-data
// useEffect(() => {
//   setChartOptions({ series: [{ type: 'line', data: dataset }] });
// }, [dataset]);

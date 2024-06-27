import { Interval, Ohlc } from '@gmjs/trading-chart-shared';

export interface CanvasChartData {
  readonly items: readonly Ohlc[];
  readonly interval: Interval;
}

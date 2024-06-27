import { Point } from '@gmjs/trading-chart-shared';

export interface CanvasChartCursorState {
  readonly pixelPosition: Point;
  readonly price: number;
  readonly seriesItemIndex: number;
}

import { SeriesPosition } from '@gmjs/trading-chart-shared';

export function multiplySeriesPosition(
  position: SeriesPosition,
  multiplier: number,
): SeriesPosition {
  return {
    ...position,
    itemSpan: position.itemSpan * multiplier,
  };
}

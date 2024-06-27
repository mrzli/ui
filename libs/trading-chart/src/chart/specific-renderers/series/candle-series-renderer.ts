import { CanvasRenderer, createCanvasRenderer } from '../../canvas-renderer';
import { CandleSeriesData, drawCandleSeries } from '../../draw/series';
import { Rect } from '@gmjs/trading-chart-shared';

export function createCandleSeriesRenderer(
  area: Rect,
): CanvasRenderer<CandleSeriesData> {
  const renderer = (
    c: CanvasRenderingContext2D,
    area: Rect | undefined,
    data: CandleSeriesData,
  ): void => {
    if (area === undefined) {
      return;
    }

    drawCandleSeries(c, area, data);
  };

  return createCanvasRenderer<CandleSeriesData>(area, undefined, renderer);
}

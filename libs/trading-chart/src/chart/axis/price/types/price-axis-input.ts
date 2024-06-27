import { Range } from '@gmjs/trading-chart-shared';

export interface PriceAxisInput {
  readonly minTickDistance: number;
  readonly range: Range;
  readonly axisLength: number;
  readonly pricePrecision: number;
}

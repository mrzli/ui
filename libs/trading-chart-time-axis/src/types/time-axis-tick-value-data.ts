import { TickValue } from '@gmjs/trading-chart-shared';

export interface TimeAxisTickValueData {
  readonly beforeFirstTime: number | undefined;
  readonly tickValues: readonly TickValue[];
}

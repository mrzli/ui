import { getNextHigherValue } from '../shared';
import {
  LIST_OF_TIME_TICK_INTERVAL_HOUR_VALUES,
  TimeTickInterval,
} from '../../types';
import { getNextHigherIntervalFromDays } from './day';

export function getNextHigherIntervalFromHours(
  input: number,
): TimeTickInterval {
  if (input > 12) {
    return getNextHigherIntervalFromDays(input / 24);
  }

  const result = getNextHigherValue(input, CUTOFFS, 12);

  return {
    unit: 'h',
    value: result,
  };
}

const CUTOFFS = LIST_OF_TIME_TICK_INTERVAL_HOUR_VALUES.toReversed();

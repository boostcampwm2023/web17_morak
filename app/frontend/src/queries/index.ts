// eslint-disable-next-line import/no-extraneous-dependencies
import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { mogacoKeys } from './mogaco';

export const queryKeys = mergeQueryKeys(mogacoKeys);

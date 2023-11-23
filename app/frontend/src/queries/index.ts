 
import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { memberKeys } from './member';
import { mogacoKeys } from './mogaco';

export const queryKeys = mergeQueryKeys(mogacoKeys, memberKeys);

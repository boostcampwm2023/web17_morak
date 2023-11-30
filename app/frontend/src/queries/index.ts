import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { groupKeys } from './group';
import { mogacoKeys } from './mogaco';
import { tmapKeys } from './tmap';

export const queryKeys = mergeQueryKeys(groupKeys, mogacoKeys, tmapKeys);

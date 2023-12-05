import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { groupKeys } from './group';
import { postKeys } from './post';
import { tmapKeys } from './tmap';

export const queryKeys = mergeQueryKeys(groupKeys, postKeys, tmapKeys);

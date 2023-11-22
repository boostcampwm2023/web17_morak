import { memberAPIHandlers } from './members';
import { mogacoAPIHandlers } from './mogaco';

export const mockAPIhandlers = [...memberAPIHandlers, ...mogacoAPIHandlers];

import { memberAPIHandlers } from './members';
import { mogacoAPIHandlers } from './mogacos';

export const mockAPIhandlers = [...memberAPIHandlers, ...mogacoAPIHandlers];

// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw/browser';

import { mockAPIhandlers } from './handlers';

export const worker = setupWorker(...mockAPIhandlers);

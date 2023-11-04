import { registerPlugin } from '@capacitor/core';

import type { EurusIntegrityPlugin } from './definitions';

const EurusIntegrity = registerPlugin<EurusIntegrityPlugin>('EurusIntegrity', {
  web: () => import('./web').then(m => new m.EurusIntegrityWeb()),
});

export * from './definitions';
export { EurusIntegrity };

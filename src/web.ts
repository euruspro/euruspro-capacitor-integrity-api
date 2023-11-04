import { WebPlugin } from '@capacitor/core';

import type { EurusIntegrityPlugin } from './definitions';

export class EurusIntegrityWeb extends WebPlugin implements EurusIntegrityPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

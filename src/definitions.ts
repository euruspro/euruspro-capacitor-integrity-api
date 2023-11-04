export interface EurusIntegrityPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

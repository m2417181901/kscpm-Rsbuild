import { config as development } from './development';
import { config as preview } from './preview';
import { config as production } from './production';

export type { Config } from './base';

const OVERLORD_ENV = process.env.OVERLORD_ENV;
export const config = OVERLORD_ENV === 'production' ? production : OVERLORD_ENV === 'preview' ? preview : development;

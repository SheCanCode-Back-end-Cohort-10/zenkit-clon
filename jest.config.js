import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

export default config;

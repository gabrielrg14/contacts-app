import type { Config } from 'jest';

const config: Config = {
  preset: "react-native",
  setupFilesAfterEnv: ["./jest-setup.ts"]
};

export default config;

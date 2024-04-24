import dotenv from 'dotenv';

async function globalSetup(): Promise<void> {
  dotenv.config({ override: true });
}

export default globalSetup;

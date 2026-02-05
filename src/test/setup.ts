import '@testing-library/jest-dom';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local for local testing, or .env.production for CI
dotenv.config({ path: path.resolve(process.cwd(), '.env.development') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.production') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

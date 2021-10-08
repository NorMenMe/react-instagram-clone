import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const config = {
  env: env.UNSPLASH_API_KEY,
};

export default config;

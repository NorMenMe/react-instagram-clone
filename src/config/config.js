import dotenv from "dotenv";
import { env } from "process";

const config = {
  env: env.UNSPLASH_API_KEY,
};

export default config;

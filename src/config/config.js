import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.REACT_APP_UNSPLASH_API_KEY,
};

export default config;

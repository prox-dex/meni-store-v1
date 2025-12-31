import { betterAuth } from "better-auth";
import { Pool } from "pg";
import "dotenv/config";
import { organization } from "better-auth/plugins"

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  emailAndPassword: { 
    enabled: true, 
    autoSignIn: false
  },
  plugins: [
    organization() 
  ]
});
import { betterAuth } from "better-auth";
import "dotenv/config";
import { organization } from "better-auth/plugins"
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from "@/lib/prisma";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: { 
    enabled: true, 
    autoSignIn: false
  },
  plugins: [
    organization() 
  ]
});
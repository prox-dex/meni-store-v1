// Note: Standard Prisma doesn't require this config file.
// Prisma uses the schema.prisma file directly.
// This file may be used by other tools, but Prisma CLI commands
// (like `prisma migrate` and `prisma generate`) read from schema.prisma directly.
// You can remove this file if it's not needed by your tooling.

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});

import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./supabase/functions/common/db/schema.ts",
    out: "./supabase/functions/common/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.SUPABASE_DB_URL!,
    },
});

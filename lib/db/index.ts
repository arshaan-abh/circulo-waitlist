import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

const connectionOptions =
  connectionString ||
  (process.env.DATABASE_HOST &&
    process.env.DATABASE_USER &&
    process.env.DATABASE_NAME && {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT
        ? Number(process.env.DATABASE_PORT)
        : undefined,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });

if (!connectionOptions) {
  throw new Error(
    "Missing database configuration. Set DATABASE_URL or DATABASE_HOST/DATABASE_USER/DATABASE_NAME.",
  );
}

// Disable prefetch as it's not supported for "Transaction" pool mode
const client =
  typeof connectionOptions === "string"
    ? postgres(connectionOptions, { prepare: false })
    : postgres({ ...connectionOptions, prepare: false });

export const db = drizzle(client, { schema });

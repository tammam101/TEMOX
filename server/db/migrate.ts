import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./";

async function main() {
  await migrate(db, { migrationsFolder: "migrations" });
  console.log("Migration complete!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Migration failed!", err);
  process.exit(1);
});
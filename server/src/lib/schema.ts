import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "../../auth-schema";

export * from "../../auth-schema";

export const image = sqliteTable("image", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  url: text("url").notNull(),
  uploadedAt: integer("uploaded_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});

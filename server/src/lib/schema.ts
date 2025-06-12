// import { sql } from "drizzle-orm";
// import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

// export const users = sqliteTable("users", {
//   id: text("id").primaryKey(),
//   name: text("name"),
//   email: text("email").notNull().unique(),
//   emailVerified: integer("email_verified", { mode: "boolean" }).default(false),
//   image: text("image"),
//   createdAt: integer("created_at", { mode: "timestamp" }).default(
//     sql`CURRENT_TIMESTAMP`
//   ),
//   updatedAt: integer("updated_at", { mode: "timestamp" }).default(
//     sql`CURRENT_TIMESTAMP`
//   ),
// });

// export const sessions = sqliteTable("sessions", {
//   id: text("id").primaryKey(),
//   userId: text("user_id")
//     .notNull()
//     .references(() => users.id, { onDelete: "cascade" }),
//   expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
//   createdAt: integer("created_at", { mode: "timestamp" }).default(
//     sql`CURRENT_TIMESTAMP`
//   ),
// });

import { integer, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const resultsTable = pgTable("results", {
    id: uuid("id").primaryKey(),
    imageUrl: text("image_url").notNull(),
    rating: integer("rating").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
        .notNull()
        .$onUpdate(() => new Date()),
});
export type InsertResult = typeof resultsTable.$inferInsert;
export type SelectResult = typeof resultsTable.$inferSelect;

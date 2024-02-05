import { timestamp, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"
import { createTable } from "./utils"

export const users = createTable("user", {
	id: varchar("id", { length: 255 }).notNull().primaryKey(),
	name: varchar("name", { length: 255 }),
	email: varchar("email", { length: 255 }).notNull(),
	emailVerified: timestamp("emailVerified", {
		mode: "date",
		fsp: 3,
	}).default(sql`CURRENT_TIMESTAMP(3)`),
	image: varchar("image", { length: 255 }),
})

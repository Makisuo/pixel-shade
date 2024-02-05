import { index, timestamp, varchar } from "drizzle-orm/mysql-core"
import { createTable } from "./utils"

export const sessions = createTable(
	"session",
	{
		sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
		userId: varchar("userId", { length: 255 }).notNull(),
		expires: timestamp("expires", { mode: "date" }).notNull(),
	},
	(session) => ({
		userIdIdx: index("session_userId_idx").on(session.userId),
	}),
)

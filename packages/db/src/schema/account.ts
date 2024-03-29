import { relations } from "drizzle-orm"
import { index, int, primaryKey, text, varchar } from "drizzle-orm/mysql-core"
import { users } from "./users"
import { sessions } from "./session"

import { type AdapterAccount } from "next-auth/adapters"
import { createTable } from "./utils"

export const accounts = createTable(
	"account",
	{
		userId: varchar("userId", { length: 255 }).notNull(),
		type: varchar("type", { length: 255 }).$type<AdapterAccount["type"]>().notNull(),
		provider: varchar("provider", { length: 255 }).notNull(),
		providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
		refresh_token: text("refresh_token"),
		access_token: text("access_token"),
		expires_at: int("expires_at"),
		token_type: varchar("token_type", { length: 255 }),
		scope: varchar("scope", { length: 255 }),
		id_token: text("id_token"),
		session_state: varchar("session_state", { length: 255 }),
	},
	(account) => ({
		compoundKey: primaryKey({
			columns: [account.provider, account.providerAccountId],
		}),
		userIdIdx: index("accounts_userId_idx").on(account.userId),
	}),
)

export const accountsRelations = relations(accounts, ({ one }) => ({
	user: one(users, { fields: [accounts.userId], references: [users.id] }),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
	user: one(users, { fields: [sessions.userId], references: [users.id] }),
}))

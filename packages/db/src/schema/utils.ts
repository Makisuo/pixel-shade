import { mysqlTableCreator } from "drizzle-orm/mysql-core"

export const createTable = mysqlTableCreator((name) => `web_${name}`)

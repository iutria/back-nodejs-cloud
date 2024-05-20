import { createPool } from "mysql2/promise";

const db = createPool(process.env.CONNECTION_URI);

export default db;
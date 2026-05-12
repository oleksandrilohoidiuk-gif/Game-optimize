import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS optimization_requests (
        id SERIAL PRIMARY KEY,
        game VARCHAR(100) NOT NULL,
        hardware VARCHAR(255) NOT NULL,
        instruction TEXT NOT NULL,
        reaction VARCHAR(50) DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

pool.query(createTableQuery)
    .then(() => console.log('Підключено до Neon: таблиця optimization_requests готова!'))
    .catch(err => console.error('Помилка бази даних:', err.message));

export default pool;
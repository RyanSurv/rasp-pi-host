import postgres from 'postgres';

const sql = postgres(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@postgres:5432/mydb`);

export default sql
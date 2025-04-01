import 'dotenv/config';
import express from 'express';
import sql from './db';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', async (req, res) => {
    const cars = await sql`SELECT * FROM cars`;
    res.json(cars);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

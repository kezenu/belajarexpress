import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' },
  })
);

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());

import db from './config/Database.js';
async function testDb() {
  try {
    await db.authenticate();
    console.log('Server Database Berhasil Jalan');
  } catch (error) {
    console.error('Koneksi Gagal', error);
  }
}

testDb();

app.listen(process.env.APP_PORT, () => {
  console.log('Server Running');
});

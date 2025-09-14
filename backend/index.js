import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import UsersRoute from './routes/UsersRoute.js';
import ProfileRoute from './routes/ProfileRoute.js';

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

import './models/UserModel.js';
import './models/ProfileModel.js';
import db from './config/Database.js';
(async () => {
  try {
    await db.sync({ force: true });
    console.log('Database synced!');
  } catch (err) {
    console.error('Sync error:', err);
  }
})();

app.use(express.json());
app.use(UsersRoute);
app.use(ProfileRoute);

app.listen(process.env.APP_PORT, () => {
  console.log('Server Running');
});

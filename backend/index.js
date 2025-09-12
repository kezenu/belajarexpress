import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
<<<<<<< HEAD
// import UsersRoute from './routes/UsersRoute.js';
// import ProductRoute from './routes/ProductRoute.js';
=======

>>>>>>> cdd434e979e0e1361448ef83fafe5a0ac686e5df
dotenv.config();
const app = express();

import db from './config/Database.js';
(async () => {
  await db.sync();
})();

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
// app.use(UsersRoute);
// app.use(ProductRoute);

app.listen(process.env.APP_PORT, () => {
  console.log('Server Running');
});

require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dbConnect = require('./config/dbConnect');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts')
 
const app = express();

const port = process.env.PORT;
const connectionAddressSession = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
const secretKey = process.env.SECRET_KEY;

app.use(logger('dev'));
app.set('cookieName', 'sid');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: true,
  credentials: true,
}));

app.set('trust proxy', 1);
app.use(session({
  name: app.get('cookieName'),
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: connectionAddressSession,
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 86400 * 1e3,
  },
}));

app.use('/users', userRouter);
app.use('/posts', postRouter);
 
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  dbConnect();
});

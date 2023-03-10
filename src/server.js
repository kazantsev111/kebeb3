import express from 'express';
import path from 'path';
import { authMiddleware, pathMiddleware } from './middlewares/mid';
import indexRouter from './routers/indexRouter';
import orderRouter from './routers/orderRouter';
import jsxRender from './utils/jsxRender';
import session from 'express-session';
import store from 'session-file-store';
import registrRouter from './routers/registrRouter';
import upload from './routers/upload';

const PORT = 3000;

const app = express();

const FileStore = store(session);

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'delivery_kebab_@', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.use(authMiddleware);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pathMiddleware);
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/upload', upload);
app.use('/api/auth', registrRouter);
app.use('/api/order', orderRouter);


app.listen(PORT, () => {
  console.log(`The server has started on port ${PORT}`);
});

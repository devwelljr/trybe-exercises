require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/uploads`));

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);

  return files.some((file) => file.split('-')[1] === fileName);
};

const storage = multer.diskStorage({
  destination: (_req, file, callback) => {
    callback(null, 'upload/');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ // multer settings
  storage,
  // eslint-disable-next-line func-names
  fileFilter(req, file, callback) {
      const ext = file.mimetype;
      if (ext !== 'image/png') {
        req.fileValidationError = true;
        return callback(null, false);
      }
      if (fileExists(file.originalname)) {
        req.fileDuplicated = true;
        return callback(null, false);
      }
      callback(null, true);
  },
}).single('file');

app.post('/upload', upload, controllers.upload);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

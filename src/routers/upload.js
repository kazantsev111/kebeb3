const express = require('express');
const multer = require('multer');
const fs = require('fs');


const router = express.Router();

const upload = multer({ dest: 'public/img' });

router.post('/', upload.single('filedata'), async  (req, res, next) => {
  let filedata = req.file;
  console.log(filedata);
  if (!filedata) res.send('Ошибка при загрузке файла');
  else res.send('Файл загружен');
});

export default router;

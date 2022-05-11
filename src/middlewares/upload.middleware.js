const multer = require('multer');
const path = require('path');

const nameFile = originalname => {
  const file = path.parse(originalname);
  return Date.now() + file.ext;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dist = path.join(__dirname, '../../public/uploads/');
    cb(null, dist);
  },
  filename: (req, file, cb) => {
    console.log(nameFile(file.originalname));
    cb(null, nameFile(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  cb(null, true);
};

const uploadMiddleware = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 ** 10 }
});

module.exports = uploadMiddleware;

import multer from 'multer';
import path from 'path';

export const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.resolve(), './uploads'));
    },
    filename: function (req, file, cb) {
      const datetimestamp = Date.now();
      cb(
        null,
        file.fieldname +
          '-' +
          datetimestamp +
          '.' +
          file.originalname.split('.')[file.originalname.split('.').length - 1]
      );
    }
  }),
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== '.xlsx' && ext !== '.xls') {
      cb(null, false);
      return cb(new Error('Only excel are allowed'));
    }
    cb(null, true);
  }
});

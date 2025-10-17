const multer = require("multer");
// const path = require("path");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../../public/uploads"));
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });
// const fileFilter = (req, file, cb) => {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const mimetype = filetypes.test(file.mimetype);
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb(new Error('Error: File upload only supports the following filetypes - ' + filetypes));
//   }
// }
// const upload = multer({
//   storage: storage,
//     limits: { fileSize: 1000000 }, // Limit file size to 1MB
//     fileFilter: fileFilter
// }).single('image'); // 'image' is the field name in the form
// const multerMiddleware = (req, res, next) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.status(400).json({ message: err.message, success: false });
//     }
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded", success: false });
//     }
//     next();
//   });
// };
// module.exports = multerMiddleware;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure the 'uploads' folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// const multer = require("multer")
// const upload = multer({dest:"uploads"})
module.exports = upload
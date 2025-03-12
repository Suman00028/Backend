// Multer helps to store uploaded files(of any type) temporarily on the server 
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");  // "cb - callback" function is provided by multer itself
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    })
    
// export const upload = multer({ storage: storage })
export const upload = multer({ storage });
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// File filter to allow only certain file types (optional)
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/png"]; 
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits: { files: 8 }
});

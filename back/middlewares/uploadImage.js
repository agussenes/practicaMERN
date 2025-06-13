const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = function(req, file, cb){
    const ext = path.extname(file.originalname).toLowerCase();

    const tiposPermitidos = ['.jpg','.jpeg', '.png', '.webp'];

    if(tiposPermitidos.includes(ext)){
        cb(null, true);
    }else{
        cb(new Error('Tipo de archivo no permitido. SOlo imágenes .pg, .jpeg, .png, .webp'), false);
    }
}

const upload = multer({storage, fileFilter});
module.exports = upload;
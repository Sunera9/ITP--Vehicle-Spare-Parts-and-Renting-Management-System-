//setting up multer
const multer = require("multer");

//defining storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'profileImgEmp')
    },
    filename: function (req, file, cb) {
      cb(null, new  Date().toISOString().replace(/:/g, "-") + "-" + file.originalname)
    }
  })

  //specifying file formats
  function fileFilter (req, file, cb) {
 
    if(
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ){
        cb(null, true)
    }else{
        cb(null, false)
    }

  }





  const upload = multer({ storage, fileFilter })

   module.exports = {upload}
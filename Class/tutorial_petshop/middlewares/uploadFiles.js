//khai bao module
const multer=require("multer");
//thiet lap storage
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`);
    }
})
//khoi tao multer instance
const upload=multer({
    storage
})

//xuat module
module.exports=upload;
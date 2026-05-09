const products = require("../models/products");
const fs=require("fs");

const Pettb=require("../models/products");

//read list
const getAllProduct=async(req,res)=>{
    //doc tham so loc tu url query
    const {msg,FromAge,ToAge}=req.query;
    //khoi tao doi tuong dieu kien truy van mongo
    let filterCondition={};
    //dieu kien loc cho age
    if(FromAge||ToAge){
        filterCondition.age={};//tao doi tuong cho dieu kien age
        //neu co FromAge
        if(FromAge){
            //$gte: lay gia tri >=
            filterCondition.age.$gte=number(FromAge);
        }
        //neu co ToAge
        if(ToAge){
            //$lte:lay gia tri <=
            filterCondition.age.$lte=Number(ToAge);
        }
    }
    try{
        //neu khong co FromAge/ToAge, filterCondition la {}, mongo se tra result la all
        const pets=await products.find(filterCondition);
        //truyen du lieu loc va danh sach pet da loc
        res.render("list",{
            pets,
            msg,
            FromAge:FromAge||'',//truyen lai gia tri de giu tren form
            ToAge:ToAge||''//truyen lai gia tri de giu tren form
        });
    }catch(error){
        console.error("Error",error);
        res.render("list",{
            pets:[],
            msg:"Filter failed",
            FromAge:FromAge||'',
            ToAge:ToAge||''
        });
    }

    res.render("list",{pets,msg});
}
//create
    //display form create
    const getFormProduct=async(req,res)=>{
        res.render("add")
    }
    //handle create
    const createProduct=async(req,res)=>{
        const data=req.body;
        if(req.file){
            data.image=req.file.filename;
        }
        try{
        await products.create(data)
        res.redirect("/?msg=add-success");//truy cap truc tiep bang duong link goc
        }catch (err){
            res.redirect("/add?msg=validation-failed");
        }
    }

//update
    //display form edit
    const getEditFormProduct=async(req,res)=>{
        const{_id}=req.params;
        //find product=_id
        const product =await products.findById(_id);
        if(!product){
            return res.redirect("/?msg=not-found");
        }
        //render form edit -> truyen du lieu sp hien tai
        res.render("edit",{product});
    }
    //handle update
    const getEditProduct=async(req,res)=>{
        const {_id}=req.params;
        const data=req.body;
        //lay thong tin sp cu de check anh
        const oldProduct=await products.findById(_id) ;
        //check neu co file anh moi duoc upload
        if(req.file){
            data.image=req.file.filename;//luu ten anh moi
            //xoa file anh cu neu co
            if(oldProduct.image){
                const oldImagePath=`./public/uploads/${oldProduct.image}`;
                //su dung fs.unlink de xoa file
                fs.unlink(oldImagePath,(err)=>{
                    if(err)console.error("Error deleting image: ",err);
                        });
            }

        }else{
            //neu khong co anh moi, giu lai anh cu
            data.image=oldProduct.image;
        }
        //cap nhat sp trong mongodb
        await products.findByIdAndUpdate(_id,data,{new:true})
        .then(result=>{
            res.redirect("/?msg=update-success");
        })
        .catch(err=>{
            res.redirect("/?msg=update-failed");
        });
    }

//delete
const deleteProduct=async(req,res)=>{
    const{_id}=req.params;
    await products.findByIdAndDelete(_id)
    .then(result=>{
        res.redirect("/?msg=delete-success")
    })
    .catch(err=>{res.redirect("/?msg=delete-failed")})
}

//xuat module
module.exports={
    getAllProduct,
    getFormProduct,
    createProduct,
    getEditFormProduct,
    getEditProduct,
    deleteProduct
}
/*
Bước,Mã code,Giải thích
Đọc Params: "const { FromAge, ToAge } = req.query;",Lấy giá trị tuổi bắt đầu và kết thúc từ URL (?FromAge=x&ToAge=y).
Điều kiện cơ sở: let filterCondition = {};,"Khởi tạo đối tượng rỗng. Nếu không có lọc, products.find({}) sẽ lấy tất cả."
Lọc Age: if (FromAge) { filterCondition.age.$gte = Number(FromAge); },"Nếu có FromAge, thêm điều kiện age >= FromAge (sử dụng toán tử MongoDB $gte)."
Lọc Age: if (ToAge) { filterCondition.age.$lte = Number(ToAge); },"Nếu có ToAge, thêm điều kiện age <= ToAge (sử dụng toán tử MongoDB $lte)."
Truy vấn: const pets = await products.find(filterCondition);,"Thực hiện truy vấn. Ví dụ, nếu lọc từ 5 đến 10, filterCondition sẽ là: { age: { $gte: 5, $lte: 10 } }."
*/
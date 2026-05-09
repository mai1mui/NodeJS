//model
const {Schema,default:mongoose}=require("mongoose");
//dinh nghia schema cho petdb
const petSchema=new Schema({
    name:{type:String,required:[true,'Name is required!']},
    price:{type:Number,required:[true,'Price is required!'],min:[0,'Price phai >0']},
    age:{type:Number,required:[true,'Age is required!'],min:[1,'Age must be greater than 1 month'],max:[30,'Age must be less than 30 months']
    },
    description:{type:String,required:[true,'Description is required!']},
    image:{type:String}
});

//tao model
//collection name trong db se la pettbs(vi mongo tu dong them s)
const Pet=mongoose.model("Pettb",petSchema);

module.exports=Pet;
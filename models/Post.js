import mongoose from "mongoose";
const PostSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    prompt:{
        type:String,
        required:true
    },
});
export default mongoose.model('Post',PostSchema) 
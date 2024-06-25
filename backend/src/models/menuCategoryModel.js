import mongoose, { Mongoose } from "mongoose";
const categorySchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: true,
  },
  menuItems:[{
    type:mongoose.Types.ObjectId,
    required:true,
  }],
},{
  timestamps:true,
})

const menuCategory = mongoose.model("menuCategory", categorySchema);
export default menuCategory;

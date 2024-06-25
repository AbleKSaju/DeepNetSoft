import mongoose from "mongoose";
const listSchema = new mongoose.Schema(
  {
    listName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const listItem = mongoose.model("listItem", listSchema);
export default listItem;

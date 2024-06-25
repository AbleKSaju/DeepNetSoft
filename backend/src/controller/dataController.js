import menuCategory from "../models/menuCategoryModel.js";
import listItem from "../models/menuListModel.js";

export const setData = async (req, res) => {
  try {
    const { menuName, menuItems } = req.body;
    const duplicate = await menuCategory.findOne({ menuName });
    if (!duplicate) {
      await menuCategory.create({
        menuName,
        menuItems: [],
      });
    }
    const itemIds = await Promise.all(
      menuItems.map(async (val) => {
        const item = await listItem.create({
          listName: val.listName,
          price: val.price,
          description: val.description,
        });
        return item._id;
      })
    );

    await menuCategory.findOneAndUpdate(
      { menuName },
      { $push: { menuItems: { $each: itemIds } } }
    );

    res.status(200).send("Data set successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
export const getDatas = async (req, res) => {
  try {
    const data = await menuCategory.find().populate({
      model: listItem,
      path: "menuItems",
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

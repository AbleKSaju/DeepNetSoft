import express from "express";
import menuCategory from "../models/menuCategoryModel.js";
import listItem from "../models/menuListModel.js";
import { getDatas, setData } from "../controller/dataController.js";
const router = express.Router();

router.post("/setData", setData);
  
router.get("/getDatas", getDatas);

export default router;

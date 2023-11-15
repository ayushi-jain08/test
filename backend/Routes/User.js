import express from "express";
const router = express.Router();
import User from "../Model/User.js";

router.get("/allusers", async (req, res, next) => {
  try {
    const user = await User.find();
    if (!user) {
      res.status(400).json({
        success: false,
        message: "No User found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
export default router;

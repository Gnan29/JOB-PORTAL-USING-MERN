import express from "express";
import multer from "multer";
import { login,register, logout, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();
 const upload = multer({ dest: 'uploads/' });  // Define Multer config for file uploads
const singleUpload = upload.single('file');

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;
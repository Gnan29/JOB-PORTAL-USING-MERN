import express from "express";
import multer from "multer";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";


const router = express.Router();
const upload = multer({ dest: 'uploads/' });  // Define Multer config for file uploads
const singleUpload = upload.single('file');

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload, updateCompany);

export default router;
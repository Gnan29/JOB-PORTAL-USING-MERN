import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import CompanyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicantionRoute from "./routes/application.route.js";
dotenv.config({});
const app = express();


//// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", CompanyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicantionRoute);



app.get("/", (req, res) => {
    res.send("Welcome to the API");
});


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at http://localhost:${PORT}`);
})
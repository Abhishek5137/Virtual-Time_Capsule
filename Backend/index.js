import express from "express";
import connectDB from "./src/Db/index.js";
import  dotenv  from "dotenv";
// import cors from 'cors'
import cookieParser from "cookie-parser";


const app = express()

dotenv.config()

// Connect to MongoDB
connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}
)
.catch((error) => {
    console.log("MongoDB Connection Failed",error);
    process.exit(1);
}
);


//configuration
// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//      credentials:true
// }))

app.use(express.json());
app.use(express.static("public"))
app.use(cookieParser())


//Routing
import userRouter from './src/routers/user.route.js'
import capsuleRouter from './src/routers/capsule.route.js'
import memoryRouter from './src/routers/memory.route.js'

app.use('/api/user',userRouter)
app.use('/api/capsule',capsuleRouter)
app.use('/api/memory',memoryRouter)

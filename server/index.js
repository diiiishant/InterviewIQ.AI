import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
dotenv.config()
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

const app =express()
const allowedOrigins = [
    "https://interview-iq-ai-ivory.vercel.app",
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        const isLocalhost = origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:");
        if (allowedOrigins.includes(origin) || isLocalhost) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/interview",interviewRouter)
app.use("/api/payment",paymentRouter)

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../client/dist")));
//     app.get("/:splat*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "../client", "dist", "index.html"));
//     });
// }

const PORT = process.env.PORT || 6000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
    connectDb()
})

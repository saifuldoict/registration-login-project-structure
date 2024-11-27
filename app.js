import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import {DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODE}));
app.use(helmet());

// Use Limiter
const limiter = rateLimit({windowMs: REQUEST_TIME, max:REQUEST_NUMBER})
app.use(limiter);

// Cache
app.set('etag', WEB_CACHE)

// Connect to MongoDB
mongoose.connect(DATABASE,{autoIndex: true}).then(()=>{
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Error connecting to MongoDB");
})

// Routes
app.use("/api", router);

// Start the server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


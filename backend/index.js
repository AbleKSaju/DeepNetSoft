import express from "express";
import router from "./src/routes/routes.js";
import connectDB from "./src/config/db.js";
import cors from 'cors'

const app = express();

//bodyParser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const allowedOrigins = ['http://localhost:3000'];

// CORS options
const corsOptions = {
    origin: (origin, callback) => {
      // Check if the origin is in the allowed list
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        console.error(`Not allowed by CORS: ${origin}`);  // Log the disallowed origin
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  };
  
  app.use(cors(corsOptions));
  
app.use('/',router)
  
const Port = 3001;
app.listen(Port, () => {
  connectDB()
  console.log(`Server Connected on port ${Port}`);
});

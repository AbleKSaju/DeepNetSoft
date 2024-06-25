import express from "express";
import router from "./src/routes/routes.js";
import connectDB from "./src/config/db.js";
import cors from 'cors'

const app = express();

//bodyParser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const allowedOrigins = ['http://localhost:3000','https://deepnetsoft-1.onrender.com/'];

// CORS options

  
  app.use(cors());
  
app.use('/',router)
  
const Port = 3001;
app.listen(Port, () => {
  connectDB()
  console.log(`Server Connected on port ${Port}`);
});

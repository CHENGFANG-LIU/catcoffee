const dotenv = require('dotenv');
dotenv.config();
const express=require("express");
const app =express();
const mongoose=require("mongoose");
const authRoutes = require('./routes/auth_routes');
const passport = require("passport");
require('./config/passport');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/coffee")
.then(()=>{
console.log("成功連接coffee資料庫");
}).catch((e)=>{
console.log(e);
}
);

// 設定routes
app.use("/auth", authRoutes);

app.get("/",(req,res)=>{
return res.render('index');
});



app.listen(8080,()=>{
console.log("localhost:8080");
});
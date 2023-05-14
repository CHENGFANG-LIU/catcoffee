const express=require("express");
const app =express();
const mongoose=require("mongoose")

app.set("view engine","ejs");
app.use(express.jason());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/coffee")
.then(()=>{
console.log("成功連接coffee資料庫");
}).catch((e)=>{
console.log(e);
}

);
app.listen(3000,()=>{
console.log("正在聆聽3000～");
});
const router=require("express").Router();
// const { Router } = require("express");
const express =require("express");
const { Passport } = require("passport");
// const router = express.Router();

const passport = require("passport");

router.get("/login", (req, res) => {
    return res.render("login", { user: req.user });
  });

router.get("/google",(req,res)=>{
passport.authenticate("google",{
  scope:['profile','email'],
  prompt:'select_account',
});
});





module.exports = router;

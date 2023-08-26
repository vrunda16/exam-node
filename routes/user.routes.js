const { Router } = require("express");
const {check }= require("../model/schema");
const express= require("../middleware/middleware.passport");
const home = require("../controller/controller");


let router = Router();


router.get("/home", homeController);
router.post("/signup", middlewareCheck, singup); 
router.get("/login", login); 
router.get("/signup", singup); 
router.get("/getadmin", passportCheck, getadmin); 


module.exports = router



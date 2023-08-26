const home= (req, res) => {
    res.render("nav")
}
const singup =async(req,res)=>{
    console.log(req.body);
    await passportjs.create(req.body)
    res.send("done")
}
const getadmin=(req,res)=>{
    res.render("index")
}

const getsignup= (req, res) => {
    res.render("singup")
}

module.exports={home,singup,getsignup,getadmin}
 
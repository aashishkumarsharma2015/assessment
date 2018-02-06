var express=require("express"),
    app=express(),
    bodyParser=require("body-parser");
    
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("*",function(req,res){
    res.render("index.ejs");
});

// app.get("/result",function(req,res){
//     // console.log(req.body.text);
//     // var text=req.body.text;
//     // console.log(text);
//     res.render("result.ejs");
    
// });


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
});
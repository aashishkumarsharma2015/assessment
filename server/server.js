var express=require('express');

var app=express();
var bodyParser = require('body-parser');
app.use(express.static("../public"));
var flash = require('connect-flash');
var cookieParser=require('cookie-parser');
var session=require('express-session')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({

    secret:'pranav',
    saveUninitialized:true,
    resave:true
}));

app.use(flash());
app.set('view engine', 'ejs');

app.get('/',function (req,res) {

    res.render('index',
        {
            answer:"_"
        })

})

app.post('/',function (req,res) {

    var input=req.body.palInput;

    var array=input.split('');
    var count=0;

    if(input.length<=1)
    {
        console.log("pal")
    }
    else {
        for (var i = 0, j = array.length - 1; i < Math.floor(array.length / 2); i++, j--)
        {
            if (array[i] === array[j]) {
                count++;
            }
        }
        if (count === Math.floor(array.length / 2)) {
            res.render('index',
                {
                answer:"pal"
            })

        }

        else {
            res.render('index',
                {
                    answer:"not pal"
                })

        }

    }

})
app.listen(9999)
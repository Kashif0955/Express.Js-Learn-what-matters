// template engin ka related all details many template engin.txt file ma likhi ha dekh skty hain ap.

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render("index");
});
app.get('/second',function(req,res){
 res.render("second");

})

app.listen(5000, () => {
    console.log("Server is running on the port 5000");
});



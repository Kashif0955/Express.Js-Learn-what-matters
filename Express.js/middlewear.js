//what is middle wear?? ----> middle wear ak asa function hota ha jo har route sa phly chalta ha.
//iska matlab sary routes main koi bh chly sab sa phly middle wear hi chlta ha,and middlewear ma likha code 
//phly execute hota ha. is ko use kasy karty hain ayein example dekhty hain.


//node ka sath yah issue ha ka control jab ak bar bh kisi middlewear par agya to control khud se agle route/middlewear par nh jayga,
//usy agly par layjany ka liya hamy 'push' karna parta ha,or yah push ka matlab ha "next()" ko chlana.

const express = require("express");
const app = express();

app.use(function(req,res,next){    //app.use middlewear ko use karny ka liya lagaty hain, ismy ham ak function pas karty hian jiska ak parameter apko new lag rha hoga "next" darasal ham next ko is liya use karty hain k
                                   //jab ak route par server jay to easilly dosry waly par bh jay or block na ho simple yah ka agar ap next nh likhty or next ko call nh karty to apka server chlta hi rahy ga, agay nh jay ga, mean "/" page par hi rahy ga, about ma nh jay ga kabhi, to yah ham production apps ma zyada tar use karty hian.
    
      next();   // agar ap next ko yah call nh kary gay to yah agy nh jay ga routing, just '/'  par hi rahy ga or agar ap '/about' likhy gay to jsut reload hi hota rahy ga,
    
   
});

app.get('/',function(req,res){
    res.send("hello world");
});

app.get('/about',function(req,res){
    res.send("about page");
})

app.listen(4000,()=>{
    console.log("middle wear chal rha ha.")
})
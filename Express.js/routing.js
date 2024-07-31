// in this part, ham simple server kasy create karty hian express ma or routing kasy karty hian wo dekhy gay.addEventListener('type', listener, options)

const express = require("express");

const app = express();   //----------> yah ham ny app name ka variable ma express ki jitni bh properties hain unhy store kara diya ha, taky ham just App ko hi call kary jab hamy express use karna ho simple.

//yha ham dekhy gay ka ham express ki help sa server ma kasy routing kar skty hian 

app.get('/', function(req, res){  //---------> get express ka method ha jo hamy kuch bh get karny ma help karta ha.
    
    res.send('Hello World');
})

app.get('/profile' ,  function(req,res){
    res.send('welcome to the profile')
})

app.listen(3000,()=>{
    console.log(" Server is running on port 3000")
});


//this is the basic example of routing in express.




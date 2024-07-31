//routing parameters 
//routing parameters ka use wha karty hian jaha apka ak route jo bar bar repeat ho rha ho, or kuch hissa bar bar change ho
//rha ho to wha ham dynamic routes create kar skty hian example:
///facebook.com/profile/kashif
///facebook.com/profile/aleena
///facebook.com/profile/raheem
///facebook.com/profile/owais

//yha /facebook.com/profile tak sab kych same hi ha agar change ho rha hato just "name",or zahir ha ham ab code ma har bar name to change karny sa rahhy,
// to just ham is name ko dynamic kar dyngy, jisy ham routing parameters/dynamic routes kahty hain. ay practicle example dekhty hain.


const express = require("express");
const app = express();

app.get('/',function(req,res){
    res.send("hello world");
});

// app.get('/profile/kashif',function(req,res){  //agar ham is trha likhy gay to hamy har profile ka liya alag sa code likhna hoga jo ka achi practice nh ha. to ab ham yha routimg parameters ka use kary gay.
  
//     res.send("hello kashif");
// })

app.get('/profile/:username',function(req,res){    //kisi bh route ko dynamic karny ka liya simple ":" ka use karna hota ha or just usy neechy use karna hota ha.
    res.send(`welcome to the profile page dear ${req.params.username}`);

});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})


//to make any route dynamic you can use : at the place where you want to make it dynamic, and to access their value use req.params.yourroutevariable name simple.
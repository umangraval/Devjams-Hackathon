const express = require('express')
// const PORT = 3001;
const app =express()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs');
const db = require('./queries')
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.set("view engine","ejs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true})); 

// app.get('/', (request, response) => {
//     response.json({ info: 'welcome' })
//   })
app.get('/property',db.getproperty);
app.get('/property/:id', db.getpropertyById)
app.get('/sell', db.sell)
app.post('/review', db.addreviews);
//app.get('/review',db.showreviews);
// app.post('/signin', db.handleSignin);
// app.post('/register',db.handleRegister);
// app.post('/property/:proid/rent',db.getrented);
app.post("/property", db.update);
app.get("/signin", db.signin);
app.post("/signin",db.handlesignin);
app.get("/register", db.register);
app.post("/register",db.handleregister);
app.post("/rentdetails",db.rentdetails);
app.get("/rent",db.rent)
app.get("/showrent",db.showrent);
app.get("/transaction",db.showtrasaction);
app.post("/buy",db.buy);
app.get("/myproperties",db.myproperties);
app.get('*',function (req, res) {
  res.redirect('/property');
});

app.post("/delete/:id",db.pdelete);
app.listen(3005,function(){
    console.log("server on port 3005");
});
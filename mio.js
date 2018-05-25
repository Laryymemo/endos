console.log("inicio todo ");

const express = require('express');
const app = express();
const modem = require('./server.js');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/api/v1/modem/create",(req,res)=>{
  const {name,placa,concesion,email,city} = req.body
  let newModem = modem({
    name:name,
    placa:placa,
    concesion:concesion,
    email:email,
    city:city
  });
   newModem.save((err,modem)=>{
     if(err) throw err;
     res.send(modem);
   });

});

app.listen(3000,()=>{
  console.log("server corriedo en el puerto 3000")
});

const path=require('path');
const express=require('express');

var app=express();
const port=process.env.PORt || 3000;
const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath));
app.listen(port,()=>console.log('server is up on port',port));

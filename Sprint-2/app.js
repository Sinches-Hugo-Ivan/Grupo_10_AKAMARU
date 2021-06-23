const express = require('express');
const path = require('path');
const port = 3030;
const app = express();

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/home',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/cart',(req,res) => res.sendFile(path.join(__dirname,'views','cart.html')))
app.get('/detail',(req,res) => res.sendFile(path.join(__dirname,'views','detail.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))


app.listen(port, () => {console.log(`Servidor corriendo en http://localhost:${port}`)
  })
  
// const http = require('http');
// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{"content-Type":"text/plain"})
//     res.end("hello nodejs !!");
// });
    
// server.listen(3000,() => {
//     console.log(`server is runing by port 3000
//     http://localhost:3000/`);
// });

const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.json());

let User = {"password":""}



app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.get("/riw", (req, res) => {
  res.send("HAHAH this is RIW ENDPOINT");
});

app.post("/api/data", (req, res) => {
  const data = req.body.message;
  res.json({ message: "Hello World", data });
});

app.post("/api/register",(req,res) => {
  const user = req.body.user;
  const password =req.body.password
  User[user]={password:password}
  res.json({ user: "regiater complete",password,user});
});
app.post("/api/login",(req,res) =>{
  const user = req.body.user;
  const password =req.body.password

  console.log(user,password)
  console.log(User[user].password)
  if(User[user] && User[user].password){
    res.json({ user: "loing complete",user})
  }else {
    res.json({error: "check your username and password"})
  }
  
});

app.listen(3000, () => {
  console.log(`server is running by port 3000 http://localhost:3000/`);
});

console.log("🐯");
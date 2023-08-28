const express = require('express');
const { template } = require('handlebars');
const path = require('path');
const app = express()
const port = 8080


const templatePath=path.join(__dirname,"../views");
app.use(express.static(path.join(__dirname, '../public')));
app.set("view engine","hbs");
app.set("views",templatePath);

// app.get('/', (req, res) => {
//   res.send('This is Login Page !')
// })
app.get('/', (req, res) => {
      // Use the res.sendFile() method to send the HTML file
      res.sendFile(__dirname + '../public/index.html');
    });
 


app.get("/index", (req, res)=>{
      res.render("index",{
            Name:"Shivam",
            comments1:"This is dynamic you can change anytime",
            comments2:"This is also dynamics",
      }
      
      );
})
app.get("/about",(req,res)=>{
      res.render("about");

})
// app.get('/index', (req, res) => {
  
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });


app.listen(port,() =>{
  console.log(`example app listning at  ${port} `)
 })
// left menu = document.querySelector('#menu-bar');
// left navbar = document.querySelector('.navbar');



// menu.onclick = () =>{
//     menu.classlist.toggle('fa-times');
//     navbar.classlist.toggle('active');
// }
// window .onscroll = () =>{
//     menu.classlist.remove('fa-times');
//     navbar.classlist.remove('active');
// }

// document.querySelector('search-icon').onclick=() =>{
// document.querySelector('search-form').classlist.toggle('active');
// }
// document.querySelector('close').onclick=() =>{
// document.querySelector('search-form').classlist.remove('active');
// }
// app.get('/',(req,res)=>{
//     const params = {}
//     res.status(200).render(home)
// })

// app.post('/contact_data', (req, res) => {
//     const name = parseInt(req.body.name);
//   });

const express= require("express");
var http = require('http');
const path=require("path");
const app=express();
const bodyparser=require('body-parser')
// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://0.0.0.0:27017/contactDance');}
const port=80;
app.post('/contact_data', (req, res) => {
    const name = parseInt(req.body.name); 
         res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
    console.log(`the app started at port`)
  });




// // to define a schema..
// const contactSchema = new mongoose.Schema({
//     name: String,
//     age: String,
//     phone: String,
//     address: String,
//     more: String

//   });
// const Contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF//
// app.use('/static', express.static('static')); // for serving static files//
// app.use(express.urlencoded())
// var router=express.Router();
// //PUG SPECIFIC STUFF//
// app.set('view engine', 'pug')//set the template engine as pug//
// app.set('views',path.join(__dirname,'view'))//set the views directory

// //our pug demo endpoint
// app.get('/',(req, res)=>{
//     const params = { }
//     res.status(200).render('home.pug',params)
// });
// app.get('/contact',async(req, res)=>{
//     const params={ }
//     res.status(200).render('contact.pug',params)
// });
// app.post('/contact_data'),(req,res)=>{
//     const myData = new Contact(req.body);
//     console.log("inside postman");
//     myData.save().then(()=>{
//     res.send("This item has been saved to the database")
//     }).catch(()=>{
//     res.status(400).send("item was not saved to the databse")
// })};

var newMenu = [
  {
      "sys": { "id": "1" },
      "fields": {
          "title": "Double Cheese Potato Burger",
          "category": "Burger",
          "price": "45",
          "caleories": "220 - 280 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/burger.jpg" } } }
      }
  },
  {
      "sys": { "id": "2" },
      "fields": {
          "title": "Cheese Sandwitch",
          "category": "Sandwitch",
          "price": "45",
          "caleories": "250 - 300 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/sandwich1.jpg" } } }
      }
  },
  {
      "sys": { "id": "3" },
      "fields": {
          "title": "Veg Club Sandwitch",
          "category": "Sandwitch",
          "price": "60",
          "caleories": "320 - 400 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/s2.jpg" } } }
      }
  },
  {
      "sys": { "id": "4" },
      "fields": {
          "title": "Cheese Masala Sandwitch",
          "category": "Sandwitch",
          "price": "45",
          "caleories": "250 - 300 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/sandwich2.jpg" } } }
      }
  },
  {
      "sys": { "id": "5" },
      "fields": {
          "title": "Veg Schezuan Sandwitch",
          "category": "Sandwitch",
          "price": "45",
          "caleories": "230 - 285 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/schez-sandwitch.jpg" } } }
      }
  },
  {
      "sys": { "id": "6" },
      "fields": {
          "title": "Masala Maggie",
          "category": "Maggie",
          "price": "25",
          "caleories": "150 - 280 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/maggie.jpg" } } }
      }
  },
  {
      "sys": { "id": "7" },
      "fields": {
          "title": "Schezuan Maggie",
          "category": "Maggie",
          "price": "30",
          "caleories": "165 - 225 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/maggie-s.jpg" } } }
      }
  },
  {
      "sys": { "id": "8" },
      "fields": {
          "title": "Veg Maggie",
          "category": "Maggie",
          "price": "30",
          "caleories": "170 - 220 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/veg-maggie.jpg" } } }
      }
  },
  {
      "sys": { "id": "9" },
      "fields": {
          "title": "Cheese Garlic Maggie",
          "category": "Maggie",
          "price": "40",
          "caleories": "190 - 230 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/garlic-maggie.jpg" } } }
      }
  },
  {
      "sys": { "id": "10" },
      "fields": {
          "title": "Cheese Veg Maggie",
          "category": "Maggie",
          "price": "45",
          "caleories": "175 - 235 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/cheese-maggie.jpg" } } }
      }
  },
  {
      "sys": { "id": "11" },
      "fields": {
          "title": "Masala Fries",
          "category": "Fries",
          "price": "35",
          "caleories": "120 - 185 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/frenchfries.jpg" } } }
      }
  },
  {
      "sys": { "id": "12" },
      "fields": {
          "title": "Schezuan Fries",
          "category": "Fries",
          "price": "45",
          "caleories": "135 - 210 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/shezuan.jpg" } } }
      }
  },
  {
      "sys": { "id": "13" },
      "fields": {
          "title": "Cheese Fries",
          "category": "Fries",
          "price": "40",
          "caleories": "140 - 156 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/cheese-fries.jpg" } } }
      }
  },
  {
      "sys": { "id": "14" },
      "fields": {
          "title": "Red Sause Pasta",
          "category": "Pasta",
          "price": "80",
          "caleories": "241 - 321 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/pasta.jpg" } } }
      }
  },
  {
      "sys": { "id": "15" },
      "fields": {
          "title": "White Sause Pasta",
          "category": "Pasta",
          "price": "80",
          "caleories": "265 - 321 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/white-pasta.jpg" } } }
      }
  },
  {
      "sys": { "id": "16" },
      "fields": {
          "title": "Milk Shakes",
          "category": "Beverages",
          "price": "35",
          "caleories": "155 - 210 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/milk-shake.jpg" } } }
      }
  },
  {
      "sys": { "id": "17" },
      "fields": {
          "title": "Hot Chocolate",
          "category": "Beverages",
          "price": "35",
          "caleories": "230 - 280 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/hot-coffee.jpg" } } }
      }
  },
  {
      "sys": { "id": "18" },
      "fields": {
          "title": "Aerated Drinks",
          "category": "Beverages",
          "price": "10",
          "caleories": "260 - 365 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/Aerated-Drinks.jpg" } } }
      }
  },
  {
      "sys": { "id": "19" },
      "fields": {
          "title": "Cold Coffee",
          "category": "Beverages",
          "price": "35",
          "caleories": "255 - 360 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/cold-coffee.jpg" } } }
      }
  },
  {
      "sys": { "id": "20" },
      "fields": {
          "title": "Coffee",
          "category": "Beverages",
          "price": "15",
          "caleories": "220 - 265 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/coffee.jpg" } } }
      }
  },
  {
      "sys": { "id": "21" },
      "fields": {
          "title": "Tea",
          "category": "Beverages",
          "price": "10",
          "caleories": "155 - 225 Kcal",
          "image": { "fields": {"file": { "url": "assets/images/tea.jpg" } } }
      }
  },
 
]

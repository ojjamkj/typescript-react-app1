const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    console.log("test")
    res.send({
      token: 'ojjamkj'
    });
  });
app.use('/menus', (req, res) => {
    console.log("menus")
    res.send({
      menus: 
      [
          {
            menuId : 'home',
            menuName : 'home',
            menuUrl : '/home',
            order : 1
          },
          {
            menuId : 'preferences',
            menuName : 'preferences',
            menuUrl : '/preferences',
            order : 2
          },
          {
            menuId : 'dashboard',
            menuName : 'dashboard',
            menuUrl : '/dashboard',
            order : 3
          }
        ]
    });
  });




app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
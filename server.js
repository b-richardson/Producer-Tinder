const { response } = require("express");
const express = require("express");
const expressReactViews = require('express-react-views');
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const router = express.Router();
const path = require('path');
const app = express();
// const routes = require("./routes/index");
const port = process.env.PORT || 5000;
const dbConnection = process.env.DB_CONNECTION;
const connectDB = require('./config/database');
const User = require('./src/models/User.js');


require('dotenv').config({
    path: path.resolve(__dirname, 'config/.env'),
  });

//   app.get('/', function (req, res){
//     res.render('homepage');
//   });    
  
// app.get('/', function (req, res){
//   res.send('hey guys');
// });  

connectDB();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine());


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });
app.get('/api/home', function(req, res) {
    res.json({ message: 'Welcome!'});
});
app.get('/api/secret', function(req, res) {
    res.json({message: 'The password is keyboardcat'});
});

// app.use(passport.initialize());
// app.use(passport.session());



// SERVER SIDE ROUTING IS BELOW

// POST REQUEST
// Request for saving newUser data

app.post('/users', async (req, res) => {
    response.send('api in progress')
    // const { name, email, password } = req.body;
  
    // try {
    //   const user = new User({ name, email, password });
    //   await user.save();
  
    //   res.status(201).json({ message: 'User created successfully' });
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ message: 'Server error' });
    // }
  });
  
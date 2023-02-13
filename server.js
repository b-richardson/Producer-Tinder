const express = require("express");
const expressReactViews = require('express-react-views');
const passport = require("passport")
const router = express.Router();
const path = require('path');
const app = express();
// const routes = require("./routes/index");
const port = process.env.PORT || 5000;
const dbConnection = process.env.DB_CONNECTION;
const connectDB = require('./config/database');

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

app.use(passport.initialize());

// app.use("/", routes);
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require("cookie-parser");



const {errorHandler,notFoundHandler} = require('./middleware/commone/errorHandler');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');



const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => console.log("Database connection successfully!"))
  .catch((err) => console.log(err));



//   Request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//set view engine
app.set("view engine", "ejs");


//set static folder
app.use(express.static(path.join(__dirname, "public")));


//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))


//routing setup
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)




//Notfound heandle
app.use(notFoundHandler);

//error handler
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`Server is listing on port ${process.env.POR}`);
})

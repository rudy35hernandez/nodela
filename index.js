const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const methodOverride = require("method-override")
const MongoStore = require("connect-mongo")
const flash = require("express-flash");
const logger = require("morgan");
const path = require("path");
const connectDB = require("./config/database");
const mainRouter = require('./routes/main')
const postRouter = require('./routes/posts')



require("dotenv").config({ path: "./config/.env" });
require("./config/passport")(passport);

connectDB();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))

// Sessions
const DB_STRING = process.env.DB_STRING
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: DB_STRING})
    }),
)



// ///Passport middleware////

app.use(passport.initialize());
app.use(passport.session());

app.use(flash())

app.use("/", mainRouter)
app.use("/posts", postRouter)



const PORT = process.env.PORT

app.listen(PORT || PORT, () => {

    console.log(`listening on port ${PORT}`)
})
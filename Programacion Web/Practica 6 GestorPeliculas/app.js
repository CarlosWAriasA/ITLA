const express = require("express");
const path = require("path");

const app = express();
const { engine } = require("express-handlebars");

const movieRouter = require("./routes/movie");
const adminRouter = require("./routes/admin");
const errorController = require("./controllers/ErrorController");
const showHelper = require("./helpers/hbs/console");
const equalToHelper = require("./helpers/hbs/equalTo");

app.engine("hbs", engine({
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main-layout',
  extname: 'hbs',
  helpers: {
    show: showHelper.show,
    equal: equalToHelper.equalTo,
  }
}));

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "Public")));

app.use("/admin", adminRouter);
app.use(movieRouter);

app.use("/", errorController.Get404);

app.listen(3000);
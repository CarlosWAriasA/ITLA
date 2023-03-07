const express = require("express");
const path = require("path");

const app = express();
const { engine } = require("express-handlebars");

const homeRouter = require("./routes/home")
const equalHelper = require("./Helpers/hbs/equalNumber");
const removedHelper = require("./Helpers/hbs/removedElement");

app.engine("hbs", engine({
  helpers: {
    equalHelper: equalHelper.EqualNumber,
    removedElement: removedHelper.removedElement
}}));

app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "Public")));

app.use(homeRouter);

app.use("/", function (require, response, next) {
  response.status(404).render("404", {layout: false});
})

app.listen(3000);
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/partials")

app.set("view engine", "hbs");

app.use((req, res, next) => {
    console.log(`${req.url}`);
    next();
});

// app.use((req, res, next) => {
//     res.render("maintance.hbs");
// });

app.use(express.static(__dirname + "/public"));

const date = new Date();
hbs.registerHelper("yearNow", () => {
    return new Date().getFullYear();
});

hbs.registerHelper("makeUppercase", (text) => {
    return text.toUpperCase();
});


app.get("/", (req, res) => {
    res.render("home.hbs", {
        title: "Home",
        welcomeText: "Welcome to our website"
    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        title: "About Us"
    });
});

app.get("/bad", (req, res) => {
    res.send({
        items: null,
        errorMessage: "Unable to fullfil the request"
    });
});

app.listen(port, () => {
    console.log(`Application Started! on port ${port}`);
});
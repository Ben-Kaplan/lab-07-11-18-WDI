const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
// const alienController = require("./controllers/controller")
const Aliens = require("./models/aliens")
const port = 3000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// app.use('/alien', alienController);
app.get("/aliens", (req, res) => {
	res.render("index.ejs", {aliens: Aliens});
});
app.delete("/aliens/:index", (req,res) => {
	Aliens.splice(req.params.index, 1);
	res.redirect("/aliens");
	
})
app.get("aliens/:index", (req, res) => {
	res.render("show.ejs", )
});





app.listen(port, () => {
	console.log("howdy cowboy")
});
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
	
});
app.get("/aliens/:index/edit", (req, res) => {
	res.render("edit.ejs", {aliens: Aliens[req.params.index],
		index: req.params.index});
});
app.put("/aliens/:index", (req, res) => {
	Aliens[req.params.index] = req.body;
	console.log("Aliens")
	res.redirect("/aliens");
});
app.get("/aliens/:index", (req, res) => {
	res.render("show.ejs", {aliens: Aliens[req.params.index], index: req.params.index})
});





app.listen(port, () => {
	console.log("howdy cowboy")
});
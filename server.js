const express = require("express");
const app = express ();
const path = require('path');
const PORT = 4000;

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
// Serve static fcodeiles
app.use(express.static("public"));

// Routes for different pages
app.get("/", (req, res) => {
    res.render("pages/index", { pageTitle: "Home" });
});

app.get("/about", (req, res) => {
    res.render("pages/about/index", { pageTitle: "About" });
});


app.get("/download-vcard", (req, res) => {
    res.download(path.join(__dirname, "/public/kamal-kaur.vcf"));
});


app.get("/articles", (req, res) => {
    res.render("pages/articles/index", { pageTitle: "Articles" });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact/index", { pageTitle: "Contact" });
});

app.get("/faq", (req, res) => {
    res.render("pages/faq/index", { pageTitle: "FAQ" });
});

app.get("/practice-area", (req, res) => {
    res.render("pages/practice-areas/practice-area", { pageTitle: "Practice areas" });
});

app.get("/resources", (req, res) => {
    res.render("pages/resources/index", { pageTitle: "Resources" });
});

// Practice Areas Routes
app.get("/practice-areas", (req, res) => {
    res.render("pages/practice-areas/index", { pageTitle: "Practice Areas" });
});

app.get("/practice-areas/cra", (req, res) => {
    res.render("pages/practice-areas/cra/index", { pageTitle: "CRA - Practice Areas" });
});

app.get("/practice-areas/family-law", (req, res) => {
    res.render("pages/practice-areas/family-law/index", { pageTitle: "Family Law - Practice Areas" });
});

app.get("/practice-areas/mergers-acquisitions", (req, res) => {
    res.render("pages/practice-areas/mergers-acquisitions/index", { pageTitle: "Mergers & Acquisitions - Practice Areas" });
});

app.get("/main", (req, res) => {
    res.render("layouts/main", { pageTitle: "main" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

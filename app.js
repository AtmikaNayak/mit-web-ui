const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

const courses = {
    engineering: {
        title: "engineering",
        image: "engineering.webp",
        desc: "A comprehensive program covering core engineering disciplines including mechanical, civil, electrical, and computer science. Emphasizes problem-solving, design thinking, and hands-on project-based learning.",
        fees: 450000
    },
    commerce: {
        title: "commerce",
        image: "commerce.webp",
        desc: "Focused on accounting, finance, economics, and business management. Prepares students for careers in banking, corporate finance, entrepreneurship, and financial analysis.",
        fees: 250000
    },
    science: {
        title: "science",
        image: "science.webp",
        desc: "Offers specializations in physics, chemistry, mathematics, biology, and environmental science. Combines theoretical knowledge with laboratory research and experimental learning.",
        fees: 200000
    }
};

app.get("/course/:course", (req,res) => {
    const data = courses[req.params.course];
    res.render("course", {data});
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"pages","home.html"))
});

app.get("/admissions", (req,res) => {
    res.sendFile(path.join(__dirname,"pages","admissions.html"))
});

app.get("/contact", (req,res) => {
    res.sendFile(path.join(__dirname,"pages","contact.html"))
});

app.listen(5000, () => {
    console.log("running!!!");
});
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    if (err) {
        res.json(500).json({
            details: "An error occurred"
        })
    } else {
        next();
    }
})

app.get("/", (req, res) => {
    res.send("Code Runner!");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
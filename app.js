require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./routes/auth");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((err, req, res, next) => {
    if (err) {
        res.json(500).json({
            details: "An error occurred"
        })
    } else {
        next();
    }
})

app.use("/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
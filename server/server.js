import express from 'express'

const app = express();

app.get("/", (req, res) => {
    console.log("server listened")
})

app.use("/translate", (req, res) => {
    console.log(req.body + "translate")
})

app.listen(3002, () => {
    console.log("listening on port 3001")
})
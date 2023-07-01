import express from 'express'
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
    console.log("server listened")
})

app.post("/translate", (req, res) => {
    const text = req.body.Text;
    const lang = req.body.Lang;
    console.log(text)
    console.log(lang)
    
})

app.listen(3002, () => {
    console.log("listening on port 3001")
})
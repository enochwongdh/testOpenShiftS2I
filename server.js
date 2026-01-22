import express from "express";

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send("Hello world~!");
})

app.get('/test2', (req, res) => {
    res.send("new test page");
})

app.get('/greet', (req, res) => {
    const gName = req.query.n;
    res.send(`Welcome, ${gName}! You're the 1st one to be here.`);
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http:${HOST}:${PORT}`);
})
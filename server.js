import express from "express";

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send("Hello world~!");
})

app.get('/test', (req, res) => {
    res.send("test page");
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http:${HOST}:${PORT}`);
})
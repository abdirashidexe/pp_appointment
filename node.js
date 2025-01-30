import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const PORT = 3000;

const orderDetails = [];

app.listen(PORT, (req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

app.post('/thankyou', (req,res) => {
    orderDetails.push(req.body);
    res.sendFile(`${import.meta.dirname}/thankyou.html`);
})
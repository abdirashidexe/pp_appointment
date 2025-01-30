import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.listen(PORT, (req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
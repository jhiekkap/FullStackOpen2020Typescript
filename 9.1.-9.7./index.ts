import express from 'express';
const calculateBmi = require('./bmiCalculator')
const app = express();
app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query
    //console.log(height, weight)
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        res.send(JSON.stringify({ weight, height, bmi: calculateBmi(height, weight) }));
    } else {
        res.send(JSON.stringify({
            error: "malformatted parameters"
        }));
    }
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
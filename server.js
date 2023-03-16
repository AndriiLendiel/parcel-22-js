

const express = require('express');

const app = express();

app.use("*", (req, res) => {
    console.log('Був запит від браузера');
    res.send('hi');
})

const listener = app.listen(4444, () => {
    console.log(`Server goes on port ${listener.address().port}`);
})

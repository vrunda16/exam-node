const express = require('express');
const app = express();
const port = 3000;


app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});


const users = [
    { id: 1, username: 'user1', password: 'pass1' },

]


app.get('/public', (req, res) => {
    res.json({ message: 'Public data' });
});


app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
});

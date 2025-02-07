const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


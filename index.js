const express = require('express');
const app = express();

require('./bootstrap')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Magic happens on port ${port}`));

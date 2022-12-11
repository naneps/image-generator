const express = require('express');
const dotEnv = require('dotenv').config();
const port = process.env.PORT || 5000;
console.log(port);
const app = express();

app.use('/openai', require('./routes/openAi'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
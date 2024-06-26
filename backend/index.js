const express = require("express");
const cors = require("cors");

const mainRouter = require('./routes');
const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/', mainRouter);

app.listen(PORT, () => {
    console.log(`server starting on port ${PORT}`);
})


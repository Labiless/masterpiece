const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const db = require("./routes/api/db.js");
app.use('/api/games', db);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening on port ${port}`));


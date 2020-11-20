const express = require('express');
const { join } = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(join(__dirname, 'client')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
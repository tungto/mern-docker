const express = require("express");

// Constants
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
	res.send("<h2>Hi there from port 3000 run by docker compose</h2>");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

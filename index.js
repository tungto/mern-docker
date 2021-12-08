const express = require("express");
const mongoose = require("mongoose");
const {
	MONGO_USER,
	MONGO_PASSWORD,
	MONGO_IP,
	MONGO_PORT,
} = require("./config/config");

console.log(MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT);

// Constants
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
	mongoose
		.connect(mongoURL)
		.then(() => {
			console.log("successfully connected to mongodb");
		})
		.catch((error) => {
			console.log(error);
			setTimeout(() => {
				connectWithRetry();
			}, 5000);
		});
};

connectWithRetry();

app.get("/", (req, res) => {
	res.send("<h2>Hi there from port!!</h2>");
});

app.listen(PORT, HOST);
// console.log(process.env);
console.log(`Running on http://${HOST}:${PORT}`);

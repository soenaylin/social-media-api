require("dotenv").config();

const express = require("express");
const app = express();
require("express-ws")(app);

const connectDB = require("./db");
connectDB();

const cors = require("cors");
app.use(
	cors({
		origin: [
			"https://social-media-bub2z8xm2-soe-nay-lins-projects.vercel.app",
            "https://social-media-web-gold.vercel.app",
		],
		credentials: true,
	})
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { usersRouter } = require("./routers/users");
app.use("/users", usersRouter);

const { postsRouter } = require("./routers/posts");
app.use("/posts", postsRouter);

const { notiRouter } = require("./routers/notis");
app.use("/notis", notiRouter);

const { wsRouter } = require("./routers/ws");
app.use(wsRouter);

app.use("/images", express.static(process.env.IMAGES_PATH));

// app.listen(process.env.PORT, "0.0.0.0", () => {
// 	console.log(`X Api running at ${process.env.PORT}...`);
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
	console.log(`X Api running at ${PORT}...`);
});

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

// Express 내장 미들웨어인 express.json()을 적용
app.use(express.json({ strict: false }));

const port = 8080;

const wordle = require("./router/wordleRouter.ts");
app.use("/wordle", wordle);

app.get("/", (req, res) => {
  res.status(200).send("downtime server");
});

const server = app.listen(port, () => {
  console.log(`[RUN] Downtime Server... | http://localhost:${port}`);
});

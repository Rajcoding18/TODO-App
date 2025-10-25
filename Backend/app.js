const express = require('express');
require('./connection/conn');
const app = express();
const auth = require('./Routes/auth');
const list = require('./Routes/list');
const cors = require('cors');
const path = require("path")

app.use(express.json());
app.use(cors());

const _dirname = path.resolve();

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.use(express.static(path.join(_dirname, "frontend/build")));

app.get(/.*/, (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});

app.listen(1000, ()=>{
    console.log("Server is running on port 1000");
})
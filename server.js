const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const port = 3000;
const mongoUrl = "mongodb://mongo:27017";

// Serve static HTML & CSS
app.use(express.static("public"));

// MongoDB connection
app.get("/data", async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("testdb");
    const data = await db.collection("testcollection").find().toArray();
    res.json(data);
    client.close();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

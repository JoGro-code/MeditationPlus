import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/home", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
  //res.send(__dirname + "/public/index.html");
  //res.render("index.ejs", { content: "API Response." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

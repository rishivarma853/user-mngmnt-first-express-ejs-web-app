import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
   res.send("Will Smit");
});

app.listen(PORT, () => {
   console.log("Server is running at https://localhost:3000");
});

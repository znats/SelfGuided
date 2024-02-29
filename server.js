const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.redirect(301, "https://techwb.org");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

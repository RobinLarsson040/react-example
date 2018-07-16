const path = require("path");
const express = require("express");
const app = express();
const buildPath = path.join(__dirname, "..", "build");

app.use(express.static(buildPath));


app.get('*', (req, res)=>{
  res.sendFile(path.join(buildPath, 'orders.html'));
} );


app.listen(3000 , () => {
  console.log("Server is up");
});

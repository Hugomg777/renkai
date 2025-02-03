const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Define the folder for static files
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "..", "public"))); // Serve CSS and JS files

// Read files from views folder and create routes dynamically
const viewsPath = path.join(__dirname, "views");
fs.readdir(viewsPath, (err, files) => {
  if (err) {
    console.error("Error reading views folder:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".html")) {
      const route = file === "index.html" ? "/" : `/${path.parse(file).name}`;
      app.get(route, (req, res) => {
        res.sendFile(path.join(viewsPath, file));
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

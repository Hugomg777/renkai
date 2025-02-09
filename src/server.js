const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

let cachedResponse = {};

// logger
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`${req.method} ${req.url} - [${now}]`);
  next();
});

app.engine(
    "hbs",
    exphbs.engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(__dirname, "views/layouts"),
        partialsDir: path.join(__dirname, "views/partials"),
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "..", "public")));

const viewsPath = path.join(__dirname, "views");
fs.readdirSync(viewsPath).forEach((file) => {
    if (file.endsWith(".hbs")) {
        let routeName = file.replace(".hbs", "");
        routeName = routeName === 'home' ? '' : routeName;
        
        app.get(`/${routeName}`, (req, res) => {
            res.render(routeName);
        });
    }
});

app.get('/banners', async (req, res) => {
    const url = "https://api.unsplash.com/search/photos?query=temple&orientation=landscape&license=free&per_page=11&client_id=bAd1dOZxbrjCPuM-daORu6Znyngpe-NZtHwJkSIByP0";

    if (cachedResponse[url]) {
        return res.json({
            ...cachedResponse[url],
            cached: true
        });
    }

    const response = await fetch(url);
    const json = await response.json();

    const mappedImages = json.results.map(result => ({
        src: result.urls.full,
        color: result.color,
    }))

    cachedResponse = {
        [url]: {
            size: mappedImages.length,
            result: mappedImages
        }
    }

    res.json(cachedResponse[url]);
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath = "." + req.url;
    if (filePath === "./") filePath = "./index.html";

    const ext = path.extname(filePath);

    let contentType = "text/html";
    if (ext === ".css") contentType = "text/css";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("Page not found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
        }
    });
});

server.listen(PORT, () => {
    console.log(`Cafe website running on port ${PORT}`);
});


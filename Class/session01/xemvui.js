const http = require("http")
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html", "charset=utf-8")
    switch (req.url) {
        case "/":
            if (req.method == "GET") {
                res.writeHead(200)
                res.end("<h1 style='color:red'>Trang chu</h1>")
            }
            break;
        case "/about":
            if (req.method == "GET") {
                res.writeHead(200)
                res.end("Trang About")
            }
            break;
        default:
            if (req.method == "GET") {
                res.writeHead(404)
                res.end("Khong tim thay trang")
            }
    }

})
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})
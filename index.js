let http = require("http")

let port = 8000

let express = require("express")

let path = require("path")

let app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs")


app.set(express.urlencoded())

app.get('/', (req, res) => {
    return res.render("Header")
})

http.createServer(app).listen(port)
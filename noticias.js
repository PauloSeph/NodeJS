let http = require('http')

let server = http.createServer(function (req, res) {

    let categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body> Noticias de tecnologia </body></html>")
    } 

    else if (categoria == '/moda') {
        res.end("<html><body> Noticias de Moda </body></html>")
    }

    else if (categoria == '/beleza') {
        res.end("<html><body> Noticias de Beleza </body></html>")
    }

    else {
        res.end("<html><body> POrtal de noticias</body> </html>")
    }


})

server.listen(3000) 
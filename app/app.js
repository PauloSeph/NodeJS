const app = require('../config/server')


let rotaNoticias = require('./routes/noticias')(app)

let rotaHome = require('./routes/home')(app)

let rotaForm = require('./routes/formulario_inclusao_noticias')(app)


app.listen(3000, function(){
    console.log('Executando express')
})



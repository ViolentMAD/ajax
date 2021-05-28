const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('.'))
//app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)



const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
}
})

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Erro safado')
        }
        res.end('Deu bom')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 2
    })
})

app.get('/parOuImpar', (req, res) => {
        const par = parseInt(req.query.numero) % 2 === 0
        res.send({
            resultado: par ? 'par' : 'impar'
        })
})

app.get('/teste', (req, res) => res.send(new Date))
app.listen(8000, () => console.log('Executando'))
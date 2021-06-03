// Configuración inicial
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

// Motor de plantilla
const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {})
app.set('view engine', 'hbs')
app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"))

// Aquí detallar rutas
app.get("/", (req, res) => {
    res.render('index', {titulo: 'Inicio con HBS'})
  })

app.get("/servicios", (req, res) => {
    res.render('servicios', {
        titulo: 'Página de servicios',
        estado: true,
        servicio: "Curso de javascript"
    })
})  

app.get("/equipo", (req, res) => {
    res.render('equipo', {
        titulo: 'Equipos',
        equipos: [
            {
                nombre: 'Boca',
                descensos:0
            },
            {
                nombre: 'Riber',
                descensos:1
            },
            {
                nombre: 'Racing',
                descensos:1
            }
        ]})
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "Página no encontrada",
    })
})

// Iniciar servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
const express = require('express')

const app = express()
app.use(express.json()) //para decirle que usaremos json

const port = 3000


app.get('/v1/explorers', (req,res) => {
    console.log(`api explores ${new Date()}`)
    const explorer1 = {id:1, name:"rami1"}
    const explorer2 = {id:2, name:"rami2"}
    const explorer3 = {id:3, name:"rami3"}
    const explorer4 = {id:4, name:"rami4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)

})


app.get('/v1/explorers/:id', (req,res) => {
    console.log(`api explores ${new Date()}`)
    console.log(`get parametro id ${req.params.id}`)
    const explorer = {id:1, name:"rami1"}
    res.status(200).json(explorer)

})


app.listen(port,()=>{
    console.log(`iniciando app on port ${port}`)
})
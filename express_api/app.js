const express = require ('express')

const app = express()
app.use(express.json) //para decirle que usaremos json

const port = 3000


app.get('/v1/explorers', (req,res)=>{
    console.log(`api explores ${new Date()}`)
    const explore1 = {id:1, name:"rami1"}
    const explore2 = {id:2, name:"rami2"}
    const explore3 = {id:3, name:"rami3"}
    const explore4 = {id:4, name:"rami4"}
    const explorers = [explore1,explore2,explore3,explore4]
    res.status(200).json(explorers)

})


app.listen(port,()=>{
    console.log(`iniciando app on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Aloha lokita')
})

app.get('/crear-usuario', (req, res) => {
    res.send('Esto es la página de crear usuario')
})


app.get('*', function (req, res) {
    res.status(404).send('bro..... esta ruta no exite');
});

app.listen(port,()=>{
    console.log('El puerto {port} esta siendo escuchado por el app')
})



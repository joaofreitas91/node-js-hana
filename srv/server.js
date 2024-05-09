const server = require('express')
const app = server()

app.get('/', (req, res) => {
    res.send([{
        name: 'joao',
        idade: 33
    }])
})
const port = process.env.PORT  || 5000
app.listen(port, () => console.log('server is running'))
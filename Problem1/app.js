const express = require('express')
const app = express()
const PORT = 5000

app.use(express.static('./static'))


app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
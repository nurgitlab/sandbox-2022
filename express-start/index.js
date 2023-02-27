import express from "express"


const PORT = 5002

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json('Сервер работает')
})
app.listen(PORT, () => console.log('Сервер запущен ' + PORT + ' порт'))
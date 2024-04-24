const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/health-pipeline', (_req, res)=>{
    res.send('deployment is online')
})


app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

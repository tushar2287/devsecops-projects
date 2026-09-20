import express from 'express'

const app = express()
const PORT = process.env.PORT || 4000

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

// Basic root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Backend service is running',
    healthCheck: '/health'
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

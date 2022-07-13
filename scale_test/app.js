const express = require('express')
const os = require('os')

const app = express()

app.use('/', async(req, resp) => {
	console.log(`I am sending a response ${os.hostname()}`)
	resp.json({ message:'Ok it works...', hostname: os.hostname() })
})

app.listen(3000, () => console.log('Server on port 3000'))

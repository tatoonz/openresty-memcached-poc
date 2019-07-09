const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => (
    res.json({
        'hello': 'world',
        'ua_device': req.header('X-App-Env'),
        'agent_type': req.header('X-Agent-Env'),
        'ts': (new Date()).toISOString(),
    })
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
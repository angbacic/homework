const express = require('express');
const playlistRouter = require('./playlists/routes');

const app = express()
const port = process.env.PORT || 4000

app .use(playlistRouter)
    .listen(port, ()=> console.log(`Listening on port ${port}`))
const express = require('express');
const bodyParser = require('body-parser');
const playlistRouter = require('./playlists/routes');
const usersRouter = require('./users/routes')
const songsRouter = require('./songs/routes')
const authRoutes = require('./auth/routes')

const app = express()
// const port = process.env.PORT || 4000

app .use(bodyParser.json())
    .use(playlistRouter)
    .use(songsRouter)
    .use(usersRouter)
    .use(authRoutes)
    .listen(process.env.PORT || 5000)
    // .listen(port, ()=> console.log(`Listening on port ${port}`))
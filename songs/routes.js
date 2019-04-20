const { Router } = require('express')
const Song = require('./model')
const Playlist = require ('../playlists/model.js')

const router = new Router()

router.get('/playlists/:id/songs', (req, res, next) => {
    Song
    .findByPk(req.params.id, { include: [Playlist] })
      .then(song => {
        if (!song) {
          return res.status(404).send({
            message: `Song does not exist`
          })
        }
        return res.send(song)
      })
      .catch(error => next(error))
  })


router.post('/playlists/:id/songs', (req, res, next) => {
  Song
    .create(req.body)
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: `Song does not exist`
        })
      }
      return res.status(201).send(song)
    })
    .catch(error => next(error))
})



module.exports = router
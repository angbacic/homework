const Sequelize = require('sequelize')
const sequelize = require('../db')
const Playlist = require('../playlists/model.js')


const Song = sequelize.define('songs', {
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  album: {
    type: Sequelize.STRING,
    field: 'title',
  }
},
{
  timestamps: false,
  tableName: 'songs'
}
)


Song.belongsTo(Playlist)
module.exports = Song
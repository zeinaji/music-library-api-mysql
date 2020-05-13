const {Artist} = require('../sequelize');

exports.create = (req, res) => {
 Artist.create(req.body).then(user => 
   res.status(201).json(user));
}

exports.list = (req, res) => {
  Artist.findAll().then(artists => res.status(200).json(artists));
}

exports.findArtistById = (req, res) => {
  const Id = req.params.artistId;
  Artist.findByPk(Id)
  .then(artist => {
    if (!artist) {
      res.status(404).json({error: 'The artist could not be found.'});
    } else {
      res.status(200).json(artist);
    }
  });
};
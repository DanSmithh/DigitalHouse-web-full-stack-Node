const PetModel = require('../models/PetModel');

const PetsController = {
  index: (req, res) => {
    res.render('index');
  }
}

module.exports = PetsController;
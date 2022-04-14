const PetModel = require('../models/PetModel');

const PetsController = {
  index: (req, res) => {
    const pets = PetModel.obterInformacoes();

    res.render('pets', { pets: pets});
  }
}

module.exports = PetsController;
//Importa herramientas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Genera modelo
const celebritySchema = new Schema({
  name : String,
  occupation : String,
  catchPhrase : String
});

//Conecta a mongoose
const Celebrity = mongoose.model('celebrity', celebritySchema);

//Exporta modelo
module.exports = Celebrity;
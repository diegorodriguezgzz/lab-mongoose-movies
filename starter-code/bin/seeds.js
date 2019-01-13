const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

const dbName = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

// const initialCelebrities = [
//   {
//     name: "Marco Monter",
//     occupation: "Ironhacker",
//     catchPhrase: "Es que todos somos amigos..."
//   },
//   {
//     name: "Diego Rodríguez",
//     occupation: "Ironhacker",
//     catchPhrase: "¡Ánimo!"
//   },
//   {
//     name: "Germán Domínguez",
//     occupation: "Teacher",
//     catchPhrase: "¡Al que diga 'Java' le vamos a cobrar 5 pesos!"
//   },
//   {
//     name: "Édgar Martínez",
//     occupation: "Viral Star",
//     catchPhrase: "¡Yaaaaaaaaaaa güeyyyyyyyyyy!"
//   }
// ];

// Celebrity.create(initialCelebrities, err => {
//   console.log(err);
//   mongoose.connection.close();
// });
const firstMovies = [
  {
    title: "La caída de Édgar",
    genre: "Drama/Terror",
    plot: "A kid from the Mexican outskirts goes on an excursion, not knowing that terror will strike."
  },
  {
    title: "El Santo contra el Pozole de la Casa de Toño",
    genre: "Epic",
    plot: "Once again, the warrior in the Silver Mask fights terrors only known to the bravest. Rated R."
  },
  {
    title: "Stephen Malkmus: Professional Scrabbler",
    genre: "Documentary",
    plot: "Rock star Stephen Malkmus faces against an AI-enhanced old lady in this critically acclaimed documentary."
  }
]

Movie.create(firstMovies, err => {
  console.log(err);
  mongoose.connection.close();
});

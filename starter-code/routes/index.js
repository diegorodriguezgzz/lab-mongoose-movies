const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render('celebrities/show', { celebrity });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      console.log(`Created ${name}`);
      res.redirect('/celebrities');
    })
    .catch(err => {
      console.log(err)
      next();
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => console.log("Celebrity deleted."))
    .catch(err => console.log(err));

  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/', { celebrities });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

//Movies
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', { movies });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/movies/add', (req, res) => {
  res.render('movies/new');
});

router.post('/movies/add', (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(() => {
      console.log(`${title} successfully created!`)
      res.redirect('/movies');
    })
    .catch(end => console.log(err));
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log("Sucessfully deleted")
  })
  .catch(err => console.log(err));

  Movie.find()
  .then(movies => {
    res.render('movies/index', {movies});
  })
  .catch(err => {
    console.log(err);
    next();
  });
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(movie => {
      res.render('movies/show', { movie });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;

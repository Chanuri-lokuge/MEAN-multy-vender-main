const express = require('express');
const app = express();
const ratingRoute = express.Router();

let Rating = require('../models/rating');

ratingRoute.route('/create').post((req, res, next) => {
  Rating.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

ratingRoute.route('/').get((req, res) => {
  Rating.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

ratingRoute.route('/read/:id').get((req, res) => {
  Rating.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


ratingRoute.route('/update/:id').put((req, res, next) => {
  Rating.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

ratingRoute.route('/delete/:id').delete((req, res, next) => {
  Rating.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = ratingRoute;
const express = require('express');
const app = express();
const orderRoute = express.Router();

let Order = require('../models/order');

orderRoute.route('/create').post((req, res, next) => {
  Order.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

orderRoute.route('/').get((req, res) => {
  Order.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

orderRoute.route('/read/:id').get((req, res) => {
  Order.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


orderRoute.route('/update/:id').put((req, res, next) => {
  Order.findByIdAndUpdate(req.params.id, {
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

orderRoute.route('/delete/:id').delete((req, res, next) => {
  Order.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = orderRoute;
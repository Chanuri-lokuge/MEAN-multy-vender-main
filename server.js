const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const port = process.env.PORT || 3004; 

mongoose
  .connect('mongodb+srv://Admin:Admin1234@cluster0.9asv8qs.mongodb.net/?retryWrites=true&w=majority')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })


app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
const userRoute = require('./routes/user.route')
const productRoute = require('./routes/product.route')
const orderRoute = require('./routes/order.route')
const ratingRoute = require('./routes/rating.route')
// const taskRoute = require('./routes/task.route')
// app.use(express.static(path.join(__dirname, '../../client')))
// app.use('/', express.static(path.join(__dirname, '../../client')))
app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/order', orderRoute)
app.use('/rating', ratingRoute)
// app.use('/task', taskRoute)

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${message}`);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`)); 
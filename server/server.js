const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute')
const authRoute = require('./Router/AuthRoute')
const connectDB = require('./Services/ConnectDBService');

const port = 5000;
//middleware apply cor add all request
app.use(cors())
//middleware get info from client by req.body
app.use(express.json());

//connect database
connectDB()

//middleware router
app.use('/users', userRoute)
app.use('/', authRoute)

//

//
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
})
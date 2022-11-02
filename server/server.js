const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute')
const authRoute = require('./Router/AuthRoute')
const accountRoute = require('./Router/AccountRoute')
const connectDB = require('./Services/ConnectDBService');

require('dotenv').config()
//middleware apply cor add all request
app.use(cors())
//middleware get info from client by req.body
app.use(express.json());

//connect database
connectDB()

//middleware router
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/accounts', accountRoute)

//

//
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}...`);
})
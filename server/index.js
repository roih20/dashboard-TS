import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import userRoutes from './routes/users.js'
import userAuthRoutes from './routes/auth.js'
import dashboardRoute from './routes/admin.js'
import validateToken from './middleware/auth.js'


//midlewares 
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.use('/users', userRoutes);
app.use('/auth', userAuthRoutes);

const MONGO_URI = 'mongodb+srv://rodrigo:usersdb@cluster0.gu2yo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 5000;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => app.listen(PORT, () => console.log('Server running and Database connected')))
 .catch((err) => console.log(err));



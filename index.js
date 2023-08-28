const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/products'); 
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user')



dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=> console.log('db connected')).catch((err)=>console.log(err))

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(cors());




app.use('/api/products', productRouter);
app.use('/api', authRouter);
app.use('/api/users', userRouter);



app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))


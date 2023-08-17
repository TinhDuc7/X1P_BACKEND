const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/products')



dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=> console.log('db connected')).catch((err)=>console.log(err))

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

// app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));
// app.use(bodyParser.json({ limit: '10mb' }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.use('/api/products', productRouter)


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))


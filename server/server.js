const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bookRouter = require('./routes/bookRoutes')

dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// /api gonna be a prefix for every routes in the bookRouter ( /api/books ) ( express.Router() instead express())
app.use('/api', bookRouter);

//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
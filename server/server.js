import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import protect from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "50mb" , extended: true}));

app.use('/api/employee',protect ,employeeRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Server is working !'});
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)});







import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './database/index.js';
import auth from './routers/auth.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get('/', (req, res) => res.send('This is api of TeamDoAn 19DTHD4'));
app.use('/auth', auth);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

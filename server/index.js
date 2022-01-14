import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './database/index.js';
import auth from './routers/auth.js';
import comments from './routers/comments.js';
import industries from './routers/industries.js';
import lectures from './routers/lectures.js';
import requests from './routers/requests.js';
import subjects from './routers/subjects.js';
import users from './routers/users.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
connectDB();

app.get('/', (req, res) => res.send('This is api of Nhom 2 19DTHD4'));
app.use('/auth', auth);
app.use('/industries', industries);
app.use('/subjects', subjects);
app.use('/lectures', lectures);
app.use('/comments', comments);
app.use('/users', users);
app.use('/requests', requests);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

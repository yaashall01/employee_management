import express from 'express';
import {register, login} from '../controller/authController.js';

const route = express.Router();

route.post('/login', login);
route.post('/register', register);


export default route;
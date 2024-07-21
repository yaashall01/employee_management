import express from 'express';
import {
    getEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} from '../controller/employeeController.js';

const router = express.Router();

router.route('/')
    .get( getEmployees)
    .post( createEmployee);

router.route('/:id')
    .get( getEmployeeById)
    .put( updateEmployee)
    .delete( deleteEmployee);


export default router;
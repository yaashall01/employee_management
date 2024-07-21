import axios from 'axios';


const API  = axios.create({
    baseUrl: process.env.APP_API,
});

export const registerUser = (userData) => API.post('/auth/registre', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);
export const logoutUser = (userData) => API.post('/auth/logout', userData);
export const getEmployees = (token) => API.get('/employee',
    {
        headers: {
            Authorisation: `Bearer ${token}`

        }
    }
)
export const createEmployee = (employeeData, token) => API.post('/employee', employeeData, {headers:
        { Authorization: `Bearer ${token}` }
})
export const deleteEmployee = (id, token) => API.delete(`/employee/${id}`, {headers: {Authorization: `Bearer ${token}` }})
export const updateEmployee = (id, token) => API.delete(`/employee/${id}`, {headers: {Authorization: `Bearer ${token}` }})

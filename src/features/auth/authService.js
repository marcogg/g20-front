import axios from 'axios';

const API_URL = 'https://graceful-pike-tank-top.cyclic.app/api/users/'

//crear un usuario
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    return response.data
}

//login usuario
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
    login
}

export default authService
import axios from 'axios';

const API_URL = 'https://graceful-pike-tank-top.cyclic.app/api/tareas/'

//crear una nueva tarea
const crearTarea = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, tareaData, config)

    return response.data

}

const tareaService = {
    crearTarea
}

export default tareaService
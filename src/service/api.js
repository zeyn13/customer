import axios from 'axios';

const URL = 'http://localhost:8000';

export const AddUserr = async (data) => {
    try {
       return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling add User Api ', error);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log('Error while calling get User Api ', error);
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling getUser api ', error);
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.post(`${URL}/${id}`, user)
    } catch (error) {
        console.log('Error while calling edituser api', error);
    }
}


export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteuser api ', error );
    }
}
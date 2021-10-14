import axios from 'axios';

export const getUser = async () => {
    let user = localStorage.getItem('user');
    if(user) {
        const response = await axios.get(`http://test.flcd.ru/api/user/${user.id}`);
        return response;
    }
    return false;
}
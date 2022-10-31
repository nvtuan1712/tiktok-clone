import axios from 'axios';

export const getListUser = async () => {
    try {
        //call api get list user
        const configHeader = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }
        const response = await axios.get('http://localhost:5000/users', configHeader);
        console.log(response);
    } catch (error) {
        //error
        //call refresh token để ghi đè lại
        //token hết hạn -> rediect đến admin
        console.log();
    }
};


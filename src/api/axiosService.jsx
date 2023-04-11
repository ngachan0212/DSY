import axios from 'axios';
export const axiosBodyToAPI = async (method, uri, body, json = true) => {
    try {
        // const xAccessToken = getToken() ? getToken() : '';
        const headerConfig = {
            // headers: {
                // 'x-access-token': xAccessToken,
            // },
        };
        let result;
        if (method === 'POST') {
            result = await axios.post(uri, body, headerConfig);
        } else if (method === 'PUT') {
            result = await axios.put(uri, body, headerConfig);
        } else if (method === 'DELETE') {
            const config = {
                ...headerConfig,
                data: body,
            };
            result = await axios.delete(uri, config);
        } else {
            result = await axios.post(uri, body, headerConfig);
        }
        console.log(result,'result')
        return result;
    } catch (error) {
        console.log(error,'errors')
        return error;
    }
};
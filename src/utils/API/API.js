import axios from 'axios';

export default {
    getRandomEmployees: function () {
        console.log('API is firing');
        return axios.get("https://randomuser.me/api/?results=50&nat=us")
    }
}
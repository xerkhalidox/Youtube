import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: '187398306462-tq0upu5o42fhg4rn7d6vuebnbq3ifupv.apps.googleusercontent.com'
    }
});
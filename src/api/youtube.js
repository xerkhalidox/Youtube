import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: 'AIzaSyCR6RVdUNph7oZwBqTskw0mmO-TGcoz000'
    }
});
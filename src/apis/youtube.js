import axios from 'axios';

const KEY = 'AIzaSyBi9yYdBT2I796gD26YDDA2K2_GsVd4nAA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
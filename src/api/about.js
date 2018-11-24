import axios from 'axios'

const about = axios.create({
    baseURL: 'http://localhost:9874'
});

export {
    about
}
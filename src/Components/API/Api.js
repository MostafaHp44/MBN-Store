import axios, {isCancel, AxiosError, AxiosHeaders} from 'axios';



export default axios.create({
    baseurl:"http://localhost:5000"
})
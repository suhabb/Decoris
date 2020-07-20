import Axios from 'axios'

const KEY="AIzaSyB3zOk-D4isWcG9GQrPWkik8WcMawufWnw";

export default Axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        type: 'video',
        maxResults : 5,
        key: KEY
    }
})
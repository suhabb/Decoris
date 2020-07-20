import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID v3Y-_PcA6fn80kqLHlq8HgbofCtmGlMuzkx7T542BpQ'
    }
});


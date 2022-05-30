import axios from "axios";

const youtubeVideoRequest = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        key: process.env.NEXT_PUBLIC_YT_API_KEY,
        regionCode: 'IN'
    }
});

export default youtubeVideoRequest;
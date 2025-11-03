import axios from 'axios';
const searchImages = async (term) => {
    const response = await  axios.get('https://api.unsplash.com//search/photos',{
        headers:{
            Authorization: 'Client-ID 3wNNHmAq2sP6tLBJQwD1v5TPdSgVw_jBh9Ge-FWVU5s'
        },
        params: {
            query: term
        }
    });
    console.log(response.data.results);
    return response.data.results;
}
export default searchImages;
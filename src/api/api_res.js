import axios from "axios";

const URL_API = "https://api.themoviedb.org/3";
const API_KEY = "4ba81e5f67440763ec10b49f275bcbcb";

export const fetchMovies = async () => {
    try {
        const response = await axios.get (`${URL_API}/movie/popular`, {
            params: {
                api_key : API_KEY,
                language: 'es-ES',
                page: 1,
            }
        });

        return response.data.results;    
    } catch (error) {
        console.error(error);
        return [];
    }
}

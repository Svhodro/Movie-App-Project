import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjJlNThiNWViOGNiYTJjZGVjOGE1MTIyYTBkYWM0ZSIsInN1YiI6IjY1ZjZmOTU4ZWI3OWMyMDE3YzUzOTMyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJnjgJWAIburZ2Gfs40xpW6Iqth_60X5tagT9vqYboQ"

const headers = {
    accept: 'application/json',
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
 export default fetchDataFromApi 

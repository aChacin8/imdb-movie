import { useEffect, useState } from "react";
import axios from "axios";
import MovieDescriptionComponent from "../components/MovieDescriptionComponent";
import { useParams } from "react-router";

const URL_API = "https://api.themoviedb.org/3";
const API_KEY = "4ba81e5f67440763ec10b49f275bcbcb";
const API_TRAILER = `https://api.themoviedb.org/3/movie/${movie.id}/videos`

export default function MovieDetails() {

    const {id} = useParams();
    const [movieList, setMovieList] = useState([]); 

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const response = await axios.get(`${URL_API}/${id}`, {
                    params: {
                        api_key: API_KEY,
                        language: 'es-ES',
                        page: 1,
                    },
                });
            } catch (error) {
                console.error(error);
                return []
            }
        }
        fetchMovieDetails();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!movie) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            {movieList.map ((movie)=> {
                return (
                    <>
                        <MovieDescriptionComponent title={movie.title} id={movie.id}  path={movie.poster_path} resume={movie.overview} average = {movie.vote_average.toFixed(1)}/>
                    </>
                );
            })}
        </>
    )

}
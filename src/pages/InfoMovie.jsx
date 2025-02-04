import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDescriptionComponent from "../components/MovieDescriptionComponent";


export default function InfoMovie({movie}) {
    const params = useParams();
    const decodedTitle = decodeURIComponent(params.title);
    const decodedPath = decodeURIComponent(params.path);
    const decodedResume = decodeURIComponent(params.resume);
    const decodedAverage = decodeURIComponent (params.average);

    const [error, setError] = useState (null);
    const [trailer, setTrailer] = useState (null);
    const [showModal, setShowModal] = useState (false);
    
    const URL_API = `https://api.themoviedb.org/3/movie/${params.id}/videos` ;
    const API_KEY = "4ba81e5f67440763ec10b49f275bcbcb";

    useEffect (()=>{
        async function fetchMovieDetails() {
            try {
                const response = await axios.get (`${URL_API}`, {
                    params: {
                        api_key : API_KEY,
                        language: 'es-ES',
                    }
                });
                
                const videos = response.data.results;
                if (videos && videos.length > 0){
                    
                    const trailerVideo = videos.find(video => video.type === "Trailer" && video.site === "YouTube");
                    
                    setTrailer(trailerVideo ?  `https://www.youtube.com/embed/${trailerVideo.key}`: null);
                }

            } catch (error) {
                setError('Error al cargar los detalles de la película.');
            }
        }
        fetchMovieDetails();
    }, [params.id]);
    
    return (
        <>
            <MovieDescriptionComponent movie={movie} title={decodedTitle} id={params.id} path={decodedPath} resume={decodedResume} average={decodedAverage} trailer={trailer}  showModal={showModal} setShowModal={setShowModal} />
            <NavLink to='/'>Home</NavLink>
        </>
    );
}

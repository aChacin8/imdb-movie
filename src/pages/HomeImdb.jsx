import { useEffect, useState } from "react";
import MovieCardComponent from "../components/MovieCardComponent";
import { Row, Col, Container } from "react-bootstrap";
import { fetchMovies } from "../api/api_res";
import NavBarComponent from "../components/NavBarComponent";

export default function HomeImdb() {

    const [movieList, setMovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getApi = async () => {
            try {
                const data = await fetchMovies();
                setMovieList(data);
                console.log(movieList);

            } catch (error) {
                throw new Error(`Error: ${error}`);

            }
        };
        console.log(movieList);

        getApi();

    }, []);

    const filteredMovies = movieList.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
            <NavBarComponent setSearchTerm={setSearchTerm} />
            <h1 className="movie-title">Peliculas Populares</h1>
            <Container className="mt-4">
                <Row className="g-3">
                    {filteredMovies.map(movie => (
                        <Col key={movie.id} md={4} className="mb-4">
                            <MovieCardComponent movie={movie} title={movie.title} id={movie.id} path={movie.poster_path} resume={movie.overview} average={movie.vote_average.toFixed(1)} trailer={movie.video} />
                        </Col>
                    ))}

                </Row>
            </Container>
        </>
    );
};



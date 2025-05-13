import { useEffect, useState } from "react";
import MoviesCard from "../componets/MoviesCard";
import axios from "axios";

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    function getMovies() {
        axios.get("http://localhost:3000/movies")
            .then(res => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(getMovies, [])


    return (
        <>
            <h1 className="mb-2">Film</h1>
            <section>

                <h2 className="mb-2">Lista Film</h2>

                <div className="row gy-3">
                    {movies.length ? movies.map(movie => (
                        <div className="col-3 col-md-4" key={movie.id}>
                            <MoviesCard data={movie} />
                        </div>
                    )) : <div>Non ci sono film</div>}
                </div>

            </section>
        </>
    );
}

export default MoviesPage;
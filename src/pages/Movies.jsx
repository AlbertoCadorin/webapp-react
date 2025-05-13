import { useEffect, useState } from "react";
import MoviesCard from "../componets/MoviesCard";
import axios from "axios";

const MoviesPage = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    function getMovies() {
        axios.get("http://localhost:3000/api/movies", {
            params: {
                search
            }
        })
            .then(res => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    function searchMovies(e) {
        e.preventDefault();
        getMovies();
    }

    useEffect(getMovies, [])


    return (
        <>
            <section>
                <div className="d-flex justify-content-between ">
                    <h1 className="mb-2">Film</h1>
                    <form onSubmit={searchMovies} className="row g-1">
                        <div className="col-auto">
                            <label className="visually-hidden">Cerca un film</label>
                            <input type="text" className="form-control" placeholder="Cerca un film"
                                value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Cerca</button>
                        </div>
                    </form>
                </div>


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
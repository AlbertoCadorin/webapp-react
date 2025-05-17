import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewsCard from "../componets/ReviewsCard";
import ReviewForm from "../componets/ReviewForm";

const MovieDetailPage = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState([])

    function getMovie() {
        axios(`http://127.0.0.1:3000/api/movies/${id}`)
            .then(res => {
                setMovie(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(getMovie, [id])

    function reviews() {
        return movie.reviews?.map(review => <ReviewsCard key={review.id} data={review} />)
    }

    return (
        <article id="moie" className="container text-white">
            <div>
                <img src={movie?.imagePath} alt={movie?.title} className="w-25" />
                <h1>{movie?.title}</h1>
                <h2>Director: {movie?.director}</h2>
                <p>{movie?.abstract}</p>
            </div>
            <section id="reviews">
                <h2>Recensioni</h2>
                {reviews()}
            </section>
            <Link to={`/movies`} className="btn btn-orang">Indietro</Link>
            <section>
                <ReviewForm movieId={id} refreshMovie={getMovie} />
            </section>
        </article>
    );
}

export default MovieDetailPage;
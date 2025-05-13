import { Link } from "react-router-dom";

const MoviesCard = ({ data }) => {

    const { id, title, abstract, release_year } = data;
    return (

        <div className="card">
            <img src="" alt="Film" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Release year: {release_year}</p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">Dettagli</Link>
            </div>
        </div>

    )
}

export default MoviesCard;
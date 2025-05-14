import { Link } from "react-router-dom";

const MoviesCard = ({ data }) => {

    const { id, title, abstract, release_year, imagePath, media_recensioni } = data;
    return (

        <div className="card bg-black text-white">
            <img src={imagePath} alt={title} className="w-50 mx-auto" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Release year: {release_year}</p>
                <p className="card-text">Media recensioni {media_recensioni}</p>
                <Link to={`/movies/${id}`} className="btn btn-orang">Dettagli</Link>
            </div>
        </div>

    )
}

export default MoviesCard;
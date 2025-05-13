const MoviesCard = () => {
    return (
        <div className="col-3 col-md-4">
            <div className="card">
                <img src="" alt="Film" />
                <div className="card-body">
                    <h5 className="card-title">Film 1</h5>
                    <p className="card-text">Descrizione del film 1</p>
                    <a href="/movies/1" className="btn btn-primary">Dettagli</a>
                </div>
            </div>
        </div>
    )
}

export default MoviesCard;
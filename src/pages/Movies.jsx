import MoviesCard from "../componets/MoviesCard";
const MoviesPage = () => {
    return (
        <>
            <h1 className="mb-2">Film</h1>
            <section>
                <h2 className="mb-2">Lista Film</h2>
                <div className="row">
                    <MoviesCard />
                </div>
            </section>
        </>
    );
}

export default MoviesPage;
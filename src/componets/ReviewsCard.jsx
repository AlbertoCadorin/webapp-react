const ReviewsCard = ({ data }) => {

    console.log(data);

    return (
        <div className="card mb-3">
            <div className="card-body bg-black text-white">
                <h5 className="card-title">{data?.text}</h5>
                <p className="card-text">Voto: {data?.vote}</p>
                <p className="card-text">By: {data?.name}</p>
            </div>
        </div>
    );
}

export default ReviewsCard;
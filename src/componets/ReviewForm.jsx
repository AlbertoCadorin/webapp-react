import { useState } from "react";
import axios from "axios";

const ReviewForm = () => {

    const initialState = {
        name: "",
        text: "",
        vote: 1,
    };

    const [moviesData, setMoviesData] = useState(initialState);

    const setFieldValue = (e) => {
        const { name, value } = e.target;
        setMoviesData((moviesData) => ({
            ...moviesData,
            [name]: value,
        }));
    }


    return (
        <form className="container">
            <h2>Scrivi una recensione</h2>
            <div className="mb-3">
                <label htmlFor="review-name" className="form-label">Il tuo nome</label>
                <input type="text" className="form-control" id="review-name"
                    placeholder="Inserisci il tuo nome" value={moviesData.name}
                    name="name" oneChange={setFieldValue} />
            </div>
            <div className="mb-3">
                <label htmlFor="review-text" className="form-label">La tua recensione</label>
                <textarea className="form-control" id="review-text" rows="3"
                    placeholder="Scrivi la tua recensione" value={moviesData.text}
                    name="text" oneChange={setFieldValue}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="review-rating" className="form-label">La tua valutazione</label>
                <input type="number" className="form-control" id="review-vote" min={1} max={5}
                    placeholder="Inserisci la tua valutazione" value={moviesData.vote}
                    name="vote" oneChange={setFieldValue} />
            </div>
            <button type="submit" className="btn btn-orang">Invia</button>
        </form>)

}

export default ReviewForm;
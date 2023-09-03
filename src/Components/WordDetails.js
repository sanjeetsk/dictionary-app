import { useWordContext } from "../WordContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess, addToHistory } from "../actions";
import axios from "axios";


const WordDetails = () => {

    const { selectedWord } = useWordContext();
    const loading = useSelector((state) => state.data.loading);
    const data = useSelector((state) => state.data.data);
    const error = useSelector((state) => state.data.error);
    const history = useSelector((state) => state.history.history);

    const dispatch = useDispatch();

    

    useEffect(() => {
        // Define an async function to fetch data
        const fetchDataForWord = async () => {
            dispatch(fetchDataRequest()); // Dispatch a loading action

            try {
                // Fetch data using Axios
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);
                dispatch(fetchDataSuccess(response.data)); // Dispatch a success action with the data
                if (!history.includes(selectedWord)) {
                    dispatch(addToHistory(selectedWord)); // Dispatch addToHistory only if not already in history
                }
            } catch (err) {
                dispatch(fetchDataFailure(err.message)); // Dispatch an error action with the error message
            }
        };

        // Call the fetchDataForWord function when the component mounts
            fetchDataForWord();
    }, [selectedWord, dispatch, history]);

    return (
        <div className="WordDetails">
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {
                !loading && Object.keys(data).length > 0 && data[0].meanings && (
                    <div>
                        <h4>{data[0].word}</h4>
                        {
                            data[0].phonetics && data[0].phonetics.length > 0 &&
                            (
                                data[0].phonetics.map((value, index) => (
                                    <div className="phonetic" key={index}>
                                        <p>{value.text}</p>
                                        <audio controls>
                                            <source src={value.audio} type="audio/mp3" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                ))
                            )
                        }
                        <h5>Meanings:</h5>
                        <ul>
                            {data[0].meanings.map((meaning, index) => (
                                <div key={index}>
                                    <h4>{meaning.partOfSpeech}</h4>
                                    {
                                        meaning.definitions.map((means, index) => (
                                            <p key={index}>{means.definition}</p>
                                        ))
                                    }
                                </div>
                            ))}
                        </ul>
                        <Link to={`/word/${data[0].word}`} />
                    </div>
                )}
        </div>
    );
};

export default WordDetails;

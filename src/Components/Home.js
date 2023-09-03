
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess, addToHistory } from "../actions";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const loading = useSelector((state) => state.data.loading);
    const data = useSelector((state) => state.data.data);
    const error = useSelector((state) => state.data.error);

    const [inputText, setInputText] = useState('');
    const [searched, setSearched] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = async () => {
        setSearched(true);
        dispatch(fetchDataRequest());
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`);
            dispatch(fetchDataSuccess(response.data));
            dispatch(addToHistory(inputText));
        } catch (err) {
            dispatch(fetchDataFailure(err.message));
        }
    };


    return (
        <div className="home">
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="enter text" />
            <button onClick={handleSearch}>Search</button>
            {loading && searched && <h1>Loading...</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {
                searched && !loading && Object.keys(data).length > 0 && data[0].meanings && (
                    <div>
                        <h4>{data[0].word}</h4>
                        {
                            data[0].phonetics && data[0].phonetics.length > 0 && 
                            (
                                data[0].phonetics.map((value,index)=>(
                                    <div className="phonetic">
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
                                        meaning.definitions.map((means, index)=>(
                                            <p key={index}>{means.definition}</p>
                                    ))
                                    }
                                </div>
                            ))}
                        </ul>
                        <Link to={`/word/${data[0].word}`}>View Word Details</Link>
                    </div>
                )}
        </div>
    );
};

export default Home;





import { useWordContext } from "../WordContext";
import WordDetails from "./WordDetails";
import { useState } from "react";

const Home = () => {

    const { setSelectedWord } = useWordContext();

    const [inputText, setInputText] = useState('');
    const [searched, setSearched] = useState(false);

    const handleSearch = () => {
        setSearched(true);
        setSelectedWord(inputText);
    };


    return (
        <div className="home">
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="enter text" />
            <button onClick={handleSearch}>Search</button>
            {
                searched &&
                <WordDetails/>
            }
        </div>
    );
};

export default Home;





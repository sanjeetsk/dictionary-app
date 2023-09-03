import { useWordContext } from '../WordContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
    const history = useSelector((state) => state.history.history);
    const { updatedWord } = useWordContext();

    const handleSearchClick = (word) =>{
        updatedWord(word);
        if (!history.includes(word)) {
            updatedWord(word); 
        }
    }

    return (
        <div className="history">
            <h1>Search History</h1>
            <ul>
                {history.map((word, index) => (
                    <li key={index}>
                        <Link to={`/word/${word}`} onClick={() => handleSearchClick(word)}>
                            {word}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default History;
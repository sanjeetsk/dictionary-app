
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
    const history = useSelector((state) => state.history.history);

    return (
        <div className="history">
            <h1>Search History</h1>
            <ul>
                {history.map((word, index) => (
                    <li key={index}>
                        <Link to={`/word/${word}`}>{word}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default History;
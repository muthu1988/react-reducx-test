import './App.css';
import { useSelector } from 'react-redux';
import { toUpperCase } from './utils/stringutils';

const Table = () => {
    const data = useSelector((state) => state.list.data)
    return (
        <ul data-testid="ul-list">
            {data.map((item, index) => <li key={item + '-' + index}>{toUpperCase(item)}</li>)}
        </ul>
    )
}

export default Table;
import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { addItems, clearItems } from './store/listSlice';

const Form = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    function onInputChange({ target }) {
        setInputValue(target.value);
    }

    function onsubmit() {
        dispatch(addItems(inputValue));
        setInputValue('');
    }

    function onClickOfClear() {
        dispatch(clearItems());
    }

    return (
        <div className="form">
            <input type='text' placeholder='type something' onChange={onInputChange} value={inputValue} />
            <button data-testid='add-button' onClick={onsubmit}>Add</button>
            <button data-testid='clear-button' onClick={onClickOfClear}>Clear All</button>
        </div>
    )
}

export default Form;
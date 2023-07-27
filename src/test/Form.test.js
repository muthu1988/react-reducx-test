import { fireEvent, screen } from '@testing-library/react';
import Form from '../Form';
import { renderWithProviders } from './utils/storeUtils';
import { store } from '../store/store';

describe('Form component testing', () => {
    beforeEach(() => {
        renderWithProviders(<Form />, { store });
    });
    it('renders form elements', () => {
        const inputElement = screen.getByPlaceholderText(/type something/i);
        const addButton = screen.getByTestId('add-button');
        const clearButton = screen.getByTestId('clear-button');
        expect(inputElement).toBeInTheDocument();
        expect(addButton).toBeInTheDocument();
        expect(clearButton).toBeInTheDocument();
    });
    it('enter values in text field', () => {
        const inputElement = screen.getByPlaceholderText(/type something/i);
        fireEvent.change(inputElement, { target: { value: 'one' } });
        expect(inputElement.value).toBe('one');
    });
    it('add button should update list', () => {
        const inputElement = screen.getByPlaceholderText(/type something/i);
        const addButton = screen.getByTestId('add-button');
        fireEvent.change(inputElement, { target: { value: 'one' } });
        fireEvent.click(addButton);
        fireEvent.change(inputElement, { target: { value: 'two' } });
        fireEvent.click(addButton);
        expect(inputElement.value).toBe('');
        expect(store.getState().list.data[0]).toBe('one');
        expect(store.getState().list.data[1]).toBe('two');
    });
    it('clear button should clear list', () => {
        const inputElement = screen.getByPlaceholderText(/type something/i);
        const addButton = screen.getByTestId('add-button');
        const clearButton = screen.getByTestId('clear-button');
        fireEvent.change(inputElement, { target: { value: 'one' } });
        fireEvent.click(addButton);
        fireEvent.click(clearButton);
        expect(inputElement.value).toBe('');
        expect(store.getState().list.data.length).toBe(0);;
    });
});
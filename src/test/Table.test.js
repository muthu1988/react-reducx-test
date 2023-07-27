import { act, screen } from '@testing-library/react';
import Table from "../Table"
import { renderWithProviders } from './utils/storeUtils';
import { store } from '../store/store';
import { addItems, clearItems } from '../store/listSlice';
import * as stringUtils from '../utils/stringutils';

describe('Table component', () => {
    beforeEach(() => {
        act(() => {
            renderWithProviders(<Table />, { store })
        })
    })
    it('check if list is displayed', () => {
        const table = screen.getByTestId('ul-list')
        expect(table).toBeInTheDocument();
    })
    it('check if items list is displayed', async () => {
        act(() => {
            store.dispatch(addItems('one'))
            store.dispatch(addItems('two'))
        })
        const itemOne = screen.getByText('ONE')
        const itemTwo = screen.getByText('TWO')
        expect(itemOne).toBeInTheDocument();
        expect(itemTwo).toBeInTheDocument();
    })
    it('check if items cleared based on store', async () => {
        act(() => {
            store.dispatch(clearItems())
        })
        const itemOne = screen.queryByText('ONE')
        const itemTwo = screen.queryByText('TWO')
        expect(itemOne).toBeNull();
        expect(itemTwo).toBeNull();
    })
    it('check if items displayed in small case', async () => {
        jest.spyOn(stringUtils, 'toUpperCase').mockImplementation((value) => {
            return 'mock' + value
        })
        act(() => {
            store.dispatch(addItems('one'))
            store.dispatch(addItems('two'))
        })
        const itemOne = screen.getByText('mock' + 'one')
        const itemTwo = screen.getByText('mock' + 'two')
        expect(itemOne).toBeInTheDocument();
        expect(itemTwo).toBeInTheDocument();
    })
})
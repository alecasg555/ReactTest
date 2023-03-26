import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import InputSearch from './InputSearch';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
    search: {
        results: [],
        isLoading: false,
        error: ''
    }
};
const store = mockStore(initialState);

describe('SearchComponent', () => {
    it('renders without errors', () => {
        render(
            <Provider store={store}>
                <InputSearch />
            </Provider>

        );
    });

    it('updates search query state on input change', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <InputSearch />
            </Provider>
        );
        const searchInput = getByTestId('search-input');
        console.log("fdasf",searchInput);
        fireEvent.change(searchInput.childNodes[0], { target: { value: 'test' } });

        //expect(searchInput.value).toBe('test');
    });


});
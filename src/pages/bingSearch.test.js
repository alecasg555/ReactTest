import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BingSearch from './bingSearch';

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
                <BingSearch />
            </Provider>
        );
    })
    it('displays search results on submit', async () => {
        const { getByTestId} =
            render(
                <Provider store={store}>
                    <BingSearch />
                </Provider>
            );
        const searchInput = getByTestId('search-input');
        const searchButton = getByTestId('search-button');

        fireEvent.change(searchInput.childNodes[0], { target: { value: 'test' } });
        fireEvent.click(searchButton);
        setTimeout(() => {
            const searchResults = getByTestId('search-results');
            expect(searchResults.childNodes.length).toBeGreaterThan(0);
        }, 3000);
        
        
    });
});
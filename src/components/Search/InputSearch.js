import * as React from 'react';
import {
    Paper,
    InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { bingResults } from '../../actions/searchActions';

const InputSearch = () => {
    const dispatch = useDispatch();
    const [text, setText] = React.useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(bingResults(text));
    };
    return (
        <Paper
            component="form"
            sx={{ p: '2px 15px', display: 'flex', alignItems: 'center', width: 650, margin: '0px auto' }}
        >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Bing Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleInputChange}
                data-testid='search-input'
            />
            <IconButton onClick={handleFormSubmit} type="button" sx={{ p: '10px' }} aria-label="search" data-testid='search-button'>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default InputSearch;
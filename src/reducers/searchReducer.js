//Result initial state
const initialState = {
    results: [],
    apiKey:'12af5adc2b654b79a104c5758bb7147a',
    isLoading: false,
    error: ''
  };

//Reducer for bin search API
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BING_REQUEST':
        return { ...state, isLoading: true };
      case 'BING_REQUEST_SUCCESS':
        return { ...state, isLoading: false, results: action.payload };
      case 'BING_REQUEST_FAILURE':
        return { ...state, isLoading: false };
      default:
        return state;
    }
  };
  export default searchReducer;

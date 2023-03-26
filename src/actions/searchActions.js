import axios from 'axios';

export const bingRequest = () => ({
  type: 'BING_REQUEST',
});

export const bingRequestSuccess = (results) => ({
  type: 'BING_REQUEST_SUCCESS',
  payload: results,
});

export const bingRequestFailure = () => ({
  type: 'BING_REQUEST_FAILURE',
});

export const bingResults = (query) => {
  return async (dispatch) => {
    dispatch(bingRequest());
    try {
      
      const response = await axios.get(
        `https://api.bing.microsoft.com/v7.0/search?q=${query}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '12af5adc2b654b79a104c5758bb7147a',
          },
        }
      );
      dispatch(bingRequestSuccess(response.data.webPages.value));
    } catch (error) {
      dispatch(bingRequestFailure());
      console.log(error);
    }
  };
};
//importing required libraries
import axios from 'axios';
//Action to manage if the bing request is loading
export const bingRequest = () => ({
  type: 'BING_REQUEST',
});

//Action to manage if the bing request return a success response
export const bingRequestSuccess = (results) => ({
  type: 'BING_REQUEST_SUCCESS',
  payload: results,
});

//Action to manage if the bing request return a error response
export const bingRequestFailure = () => ({
  type: 'BING_REQUEST_FAILURE',
});

//Action that consume the bing search API and save it into store
export const bingResults = (query) => {
  return async (dispatch,getState) => {
    dispatch(bingRequest());
    try {
      //get api key
      const state = getState();
      const apiKey = state.search.apiKey;

      //Request to bing search API
      const response = await axios.get(
        `https://api.bing.microsoft.com/v7.0/search?q=${query}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': apiKey,
          },
        }
      );
      dispatch(bingRequestSuccess(response.data.webPages.value));
    } catch (error) {
      //Catch any error in request to bing search API 
      dispatch(bingRequestFailure());
      console.log(error);
    }
  };
};
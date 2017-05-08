export const MAKE_REQUEST = 'MAKE_REQUEST';


export function GetAllData(response) {
  return dispatch => {
    dispatch({ data: response, type: MAKE_REQUEST });
  };
}


export function FeedRequest(REQUEST_URL) { 
    console.log('Llegue al action');
  return dispatch =>
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(GetAllData(responseData));
    });
}

    
export const MAKE_REQUEST = 'MAKE_REQUEST';
export const CLEAR_STATE = 'CLEAR_STATE';

export function GetAllData(response) {
  console.log(response);
  return {
    data: response.items, type: MAKE_REQUEST
  };
}


export function FeedRequest(REQUEST_URL) {
  return dispatch => {
  fetch('https://api.rss2json.com/v1/api.json?rss_url='+REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => dispatch(GetAllData(responseData)));
  }
}

    
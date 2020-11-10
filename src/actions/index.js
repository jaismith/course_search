import { get } from 'axios';

export const ActionTypes = {
  QUERY: 'QUERY',
  QUERY_ERR: 'QUERY_ERR',
};

const query = (q) => {
  return (dispatch) => {
    get('https://api.d-planner.com/core/courses/search', {
      params: {
        q,
        includes: 'title,averageQuality,description',
      },
    })
      .then((res) => {
        dispatch({
          type: ActionTypes.QUERY,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.error('Error retrieving search results:', err);
        dispatch({
          type: ActionTypes.QUERY_ERR,
        });
      });
  };
};

export default query;

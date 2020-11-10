const initialState = {
  results: [],
};

const QueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUERY':
      return { results: action.payload };
    case 'QUERY_ERR':
      return { results: [] };
    default:
      return state;
  }
};

export default QueryReducer;

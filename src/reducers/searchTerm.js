const saveSearchReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SEARCH_TERM":
      //to avoid having duplicates saved in state
      if (action.payload) {
        let index = state.findIndex(
          (element) => element.term === action.payload
        );

        if (index === -1) return [...state, { term: action.payload }];
        return state;
      }
    default:
      return state;
  }
};
export default saveSearchReducer;

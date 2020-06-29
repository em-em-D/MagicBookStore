const books = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case "CREATE_BOOK":
      console.log("cb", action);
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category
        }
      ];
    case "REMOVE_BOOK":
      console.log("rb", action);
      // return state.map(book => (book.id === action.id ? { ...book } : todo));
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default books;

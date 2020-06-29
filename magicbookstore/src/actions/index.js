import getId from "../utils/getId";

export const createBook = (title, category) => ({
  type: "CREATE_BOOK",
  id: 0,
  title,
  category
});

export const removeBook = id => ({
  type: "REMOVE_BOOK",
  id
});

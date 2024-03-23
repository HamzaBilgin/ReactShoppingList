const initialState = {
  shoppingList: [],
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload],
      };
    case "REMOVE_FROM_LIST":
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "UPDATE_LIST_ITEM":
      return {
        ...state,
        shoppingList: state.shoppingList.map((item) => {
          if (item._id === action.payload._id) {
            item = action.payload.updatedItem;
            return item;
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default shoppingListReducer;

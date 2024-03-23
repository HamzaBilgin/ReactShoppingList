export const addToList = (item) => {
  return {
    type: "ADD_TO_LIST",
    payload: item,
  };
};

export const removeFromList = (item) => {
  return {
    type: "REMOVE_FROM_LIST",
    payload: item,
  };
};

export const updateListItem = (item) => {
  return {
    type: "UPDATE_LIST_ITEM",
    payload: item,
  };
};

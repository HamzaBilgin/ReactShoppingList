import { useState } from "react";
import ShoppingForm from "./AddNewListItem/ShoppingForm";
import ShoppingList from "./ShoppingList";

const initialState = {
  _id: null,
  updateRequestStatus: null,
  checkStatus: null,
  ingredent: "",
  amount: "",
};
const ShoppingListWrapper = () => {
  const [listItems, setListItems] = useState([]);
  return (
    <div className="shoppingListWrapper flex flex-col w-[1000px]  mx-auto mt-6">
      <h1 className="text-center mb-4">ShoppingList</h1>
      <ShoppingForm listItems={listItems} setListItems={setListItems} />
      <ShoppingList listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default ShoppingListWrapper;

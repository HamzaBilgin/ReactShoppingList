import { useState } from "react";
import ShoppingForm from "./AddNewListItem/ShoppingForm";
import ShoppingList from "./ShoppingList";

const ShoppingListWrapper = () => {
  const [listItems, setListItems] = useState([]);
  return (
    <div className="shoppingListWrapper flex flex-col w-[1000px]  mx-auto mt-6">
      <h1 className="text-center mb-4">ShoppingList</h1>
      <ShoppingForm listItems={listItems} setListItems={setListItems} />
      <blockquote className="text-center pb-5">
        If there is a product you want to change in the shopping list, please
        click on the upgrade button and change the content. Then click on the
        save button.
      </blockquote>
      <ShoppingList listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default ShoppingListWrapper;

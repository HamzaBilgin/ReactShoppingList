import React from "react";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  return (
    <table className="shoppingList  mt-[40px]">
      <thead>
        <tr className="border-b-2 border-red-500">
          <th className="w-[50px] bg-amber-200 overflow-hidden max-w-[100px] truncate">
            Statu
          </th>
          <th className="w-[500px] overflow-hidden max-w-[500px] truncate">
            Ingredent
          </th>
          <th className="w-[200px] overflow-hidden max-w-[200px] truncate">
            Amount
          </th>
          <th className="w-[200px] overflow-hidden max-w-[100px]"></th>
        </tr>
      </thead>
      <tbody>
        <ShoppingListItem />
      </tbody>
    </table>
  );
};

export default ShoppingList;

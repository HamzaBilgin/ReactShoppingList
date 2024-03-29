import PropTypes from "prop-types";
import ShoppingListItem from "./ShoppingListItem";
import { useSelector } from "react-redux";
const ShoppingList = () => {
  const shoppingList = useSelector((state) => state.shoppingList.shoppingList);
  return (
    <>
      {" "}
      {shoppingList.length === 0 ? (
        <p className="bg-red-300 text-center text-2xl">No Item In List</p>
      ) : (
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
            {shoppingList.map((item) => (
              <ShoppingListItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ShoppingList;

ShoppingList.propTypes = {
  listItems: PropTypes.array,
  setListItems: PropTypes.func,
};

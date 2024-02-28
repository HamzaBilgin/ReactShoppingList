import PropTypes from "prop-types";

const ShoppingListItem = ({ item, listItems, setListItems }) => {
  const { _id, checkStatus, ingredent, amount } = item;
  function handleDeleteItem() {
    setListItems(listItems.filter((selectedItem) => selectedItem._id !== _id));
  }
  return (
    <tr className="h-[40px] text-center border-b-2 border-black-500">
      <td>
        {""}
        <input
          type="checkbox"
          defaultChecked={checkStatus}
          className="cursor-pointer"
        />
      </td>
      <td className="max-w-[500px] truncate">{ingredent}</td>
      <td>{amount}</td>
      <td className="flex item-center h-[40px]">
        <button className="m-1 px-2 bg-amber-200" onClick={handleDeleteItem}>
          Güncelle
        </button>
        <button className="m-1 px-2 bg-red-600" onClick={handleDeleteItem}>
          Sil
        </button>
      </td>
    </tr>
  );
};

export default ShoppingListItem;

ShoppingListItem.propTypes = {
  item: PropTypes.object,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      checkStatus: PropTypes.boolean,
      ingredent: PropTypes.string,
      amount: PropTypes.string,
    })
  ),
  setListItems: PropTypes.func,
};

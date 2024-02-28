import PropTypes from "prop-types";
import { useState } from "react";
import ShoopingInput from "./ShoopingInput";
const ShoppingListItem = ({ item, listItems, setListItems }) => {
  const { _id, checkStatus, ingredent, amount } = item;
  const [updateRequest, setUpdateRequest] = useState(false);
  const [updateRequestItem, setUpdateRequestItem] = useState(
    ...listItems.filter((selectedItem) => selectedItem._id === _id)
  );
  function handleChange({ target: { name, value } }) {
    setUpdateRequestItem({
      ...updateRequestItem,
      [name]: value,
    });
  }
  function handleUpdateRequest() {
    setUpdateRequest(true);
    setUpdateRequestItem(
      ...listItems.filter((selectedItem) => selectedItem._id === _id)
    );
  }
  function handleSaveItem() {
    setListItems(
      listItems.map((item) => {
        if (item._id === _id) {
          item = updateRequestItem;
          return item;
        } else {
          return item;
        }
      })
    );
    setUpdateRequest(false);
  }
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
      {updateRequest === false ? (
        <>
          <td className="max-w-[500px] truncate">{ingredent}</td>
          <td className="max-w-[500px] truncate">{amount}</td>
        </>
      ) : (
        <>
          <td>
            <ShoopingInput
              key={1}
              name={"ingredent"}
              onChange={handleChange}
              value={updateRequestItem.ingredent}
            />
          </td>
          <td>
            <ShoopingInput
              key={2}
              name={"amount"}
              onChange={handleChange}
              value={updateRequestItem.amount}
            />
          </td>
        </>
      )}

      <td className="flex item-center h-[40px]">
        {updateRequest === false ? (
          <button
            className="w-[70px] m-1 px-2 bg-amber-200"
            onClick={handleUpdateRequest}
          >
            Update
          </button>
        ) : (
          <button
            className="w-[70px] m-1 px-2 bg-amber-200"
            onClick={handleSaveItem}
          >
            Save
          </button>
        )}
        <button className="m-1 px-2 bg-red-600" onClick={handleDeleteItem}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShoppingListItem;

ShoppingListItem.propTypes = {
  item: PropTypes.object,
  listItems: PropTypes.array,
  setListItems: PropTypes.func,
};

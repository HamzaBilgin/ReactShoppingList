import PropTypes from "prop-types";
import { useState } from "react";
import ShoppingFormItem from "./ShoppingFormItem";
import { shoppingFormData } from "../../../data/ShoppingData/shoppingFromDatas.js";
import ErrorModal from "../../UI/ErrorModal";
const initialState = {
  _id: null,
  checkStatus: false,
  ingredent: "",
  amount: "",
};
const ShoppingForm = (props) => {
  const { listItems, setListItems } = props;
  const [listItem, setListItem] = useState(initialState);
  const [isShowError, setIsShowError] = useState(false);

  function handleChange({ target: { name, value } }) {
    setListItem({
      ...listItem,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = Object.values([
      listItem.ingredent,
      listItem.amount,
    ]).every((value) => value.trim() !== "");

    if (!isFormValid) {
      console.error("Tüm alanlar dolu ve boş karakter içermemelidir.");
      setIsShowError(true);
      return;
    }

    const newListItemInput = {
      _id: listItems.length + 1,
      checkStatus: false,
      ingredent: listItem.ingredent,
      amount: listItem.amount,
    };

    setListItems([...listItems, newListItemInput]);
    setListItem(initialState);
  }
  return (
    <form
      className="shoppignForm-item-wrapper flex flex-col  px-4 pt-4  w-[400px] mb-10 rounded-lg m-auto cursor-pointer group "
      onSubmit={handleSubmit}
    >
      {shoppingFormData.map((data) => (
        <ShoppingFormItem
          data={data}
          key={data.name}
          onChange={handleChange}
          value={listItem[data.name]}
        />
      ))}

      <div className="flex justify-end">
        <button
          type="submit"
          className="group-hover:bg-emerald-400 px-6 py-2 rounded-lg mb-4"
        >
          Kaydet
        </button>
      </div>
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message="Tüm alanlar dolu ve boş karakter içermemelidir."
      />
    </form>
  );
};

export default ShoppingForm;

ShoppingForm.propTypes = {
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

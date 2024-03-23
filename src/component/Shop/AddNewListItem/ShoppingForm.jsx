import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { shoppingFormData } from "../../../data/ShoppingData/shoppingFromDatas.js";
import ShoppingFormItem from "./ShoppingFormItem";
import ErrorModal from "../../UI/ErrorModal";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../../../redux/actions/shoppingListActions.js";
const initialState = {
  _id: null,
  checkStatus: false,
  ingredent: "",
  amount: "",
};
const ShoppingForm = () => {
  const dispatch = useDispatch();
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
      _id: uuidv4(),
      checkStatus: false,
      ingredent: listItem.ingredent,
      amount: listItem.amount,
    };

    dispatch(addToList(newListItemInput));
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
          Save
        </button>
      </div>
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message="All fields must be filled and contain no blank space"
      />
    </form>
  );
};

export default ShoppingForm;

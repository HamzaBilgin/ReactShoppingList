import React from "react";

const ShoppingListItem = () => {
  return (
    <tr className="h-[40px] text-center border-b-2 border-black-500">
      <td>
        {""}
        <input
          type="checkbox"
          defaultChecked={false}
          className="cursor-pointer"
        />
      </td>
      <td>Boz</td>
      <td>31</td>
      <td className="flex item-center h-[40px]">
        <button className="m-1 px-2 bg-amber-200">Güncelle</button>
        <button className="m-1 px-2 bg-emerald-400">Tamamlandı</button>
        <button className="m-1 px-2 bg-red-600">Sil</button>
      </td>
    </tr>
  );
};

export default ShoppingListItem;

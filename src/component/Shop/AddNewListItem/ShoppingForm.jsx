import React from "react";

const ShoppingForm = () => {
  return (
    <form className="shoppignForm-item-wrapper flex flex-col  px-4 pt-4  w-[400px] mb-10 rounded-lg m-auto cursor-pointer group ">
      <div className="flex  justify-end p-2 mb-4 item-center w-full mx-auto rounded-lg ">
        <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
          Ingredent :
        </label>
        <input
          type="text"
          placeholder="Please enter ingredent"
          className="bg-transparent w-3/4 pl-3 hover:bg-sky-700 group-hover:bg-slate-300 focus:bg-red-300"
          name="ingredentName"
        />
      </div>
      <div className="flex  justify-end p-2 mb-4 item-center w-full mx-auto rounded-lg ">
        <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
          Ingredent :
        </label>
        <input
          type="text"
          placeholder="Please enter ingredent"
          className="bg-transparent w-3/4 pl-3 hover:bg-sky-700 group-hover:bg-slate-300"
          name="ingredentName"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="group-hover:bg-emerald-400 px-6 py-2 rounded-lg mb-4"
        >
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default ShoppingForm;

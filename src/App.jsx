import { useState } from "react";
import ShoppingList from "./component/Shop/ShoppingList";
import ShoppingForm from "./component/Shop/AddNewListItem/ShoppingForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app flex flex-col w-[1000px]  mx-auto mt-6">
      <h1 className="text-center mb-4">ShoppingList</h1>
      <ShoppingForm />
      <ShoppingList />
    </div>
  );
}

export default App;

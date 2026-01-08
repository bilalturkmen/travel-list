import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import { initialItems } from "./data/Items";

const App = () => {
  const [items, setItems] = useState([...initialItems]);
  const [inputValue, setInputValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState("input");

  const addItem = () => {
    if (inputValue.trim()) {
      const normalizedInput = inputValue.toLowerCase();
      const existingItem = items.find(
        (item) => item.name.toLowerCase() === normalizedInput
      );
      if (existingItem) {
        existingItem.quantity += quantity;
        setItems([...items]);
      } else {
        setItems([...items, { name: inputValue, quantity, completed: false }]);
      }
      resetInput();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const resetInput = () => {
    setInputValue("");
    setQuantity(1);
  };

  const deleteItem = (name) => {
    setItems(
      items.filter((item) => item.name.toLowerCase() !== name.toLowerCase())
    );
  };

  const deleteAll = () => {
    if (items.length === 0) {
      alert("The list is already empty.");
      return;
    }
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  const toggleCompletion = (name) => {
    setItems(
      items.map((item) =>
        item.name.toLowerCase() === name.toLowerCase()
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "completed") {
      return Number(a.completed) - Number(b.completed);
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0; // Default to input order
  });

  const totalItems = items.length;
  const completedItems = items.filter((item) => item.completed).length;
  const completionPercentage = totalItems
    ? Math.round((completedItems / totalItems) * 100)
    : 0;

  return (
    <div className="grid min-h-screen grid-rows-[auto_auto_1fr_auto]">
      <Header />
      <InputSection
        inputValue={inputValue}
        setInputValue={setInputValue}
        quantity={quantity}
        setQuantity={setQuantity}
        addItem={addItem}
        handleKeyDown={handleKeyDown}
      />
      <ItemList
        sortedItems={sortedItems}
        totalItems={totalItems}
        toggleCompletion={toggleCompletion}
        deleteItem={deleteItem}
        deleteAll={deleteAll}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Footer
        totalItems={totalItems}
        completedItems={completedItems}
        completionPercentage={completionPercentage}
      />
    </div>
  );
};

export default App;

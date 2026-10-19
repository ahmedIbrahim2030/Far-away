import { useRef, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Phone charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const nextId = useRef(initialItems.length + 1);

  function handleAddItem(description, quantity) {
    const newItem = {
      id: nextId.current,
      description,
      quantity,
      packed: false,
    };

    nextId.current += 1;
    setItems((currentItems) => [...currentItems, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const shouldClear = window.confirm(
      "Are you sure you want to delete all packing-list items?",
    );

    if (shouldClear) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

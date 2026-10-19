import { useRef, useState } from "react";

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
    setItems([]);
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

function Logo() {
  return <h1>🌴Far Away 🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedDescription = description.trim();
    if (!trimmedDescription) return;

    onAddItem(trimmedDescription, quantity);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <label className="visually-hidden" htmlFor="item-quantity">
        Quantity
      </label>
      <select
        id="item-quantity"
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <label className="visually-hidden" htmlFor="item-description">
        Item description
      </label>
      <input
        id="item-description"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  const sortedItems = [...items].sort((first, second) => {
    if (sortBy === "description") {
      return first.description.localeCompare(second.description);
    }
    if (sortBy === "packed") {
      return Number(first.packed) - Number(second.packed);
    }
    return first.id - second.id;
  });

  return (
    <section className="list" aria-label="Packing list">
      {items.length === 0 ? (
        <p className="empty-list">
          Your packing list is empty. Add an item to get started!
        </p>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <div className="actions">
          <label className="visually-hidden" htmlFor="sort-items">
            Sort items
          </label>
          <select
            id="sort-items"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button type="button" onClick={onClearList}>
            Clear list
          </button>
        </div>
      )}
    </section>
  );
}

function Stats({ items }) {
  const itemCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercentage =
    itemCount === 0 ? 0 : Math.round((packedCount / itemCount) * 100);

  return (
    <footer className="stats">
      {itemCount === 0 ? (
        <em>Start adding some items to your packing list!</em>
      ) : (
        <em>
          {packedPercentage === 100
            ? "You packed everything. Ready to go!"
            : `You have ${itemCount} items on your list, and you already packed ${packedCount} (${packedPercentage}%).`}
        </em>
      )}
    </footer>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
        aria-label={`Mark ${item.description} as packed`}
      />
      <span className={item.packed ? "packed" : undefined}>
        {item.quantity} {item.description}
      </span>
      <button
        type="button"
        onClick={() => onDeleteItem(item.id)}
        aria-label={`Delete ${item.description}`}
      >
        ❌
      </button>
    </li>
  );
}

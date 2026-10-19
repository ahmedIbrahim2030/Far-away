import { useState } from "react";
export default function Form({ onAddItem }) {
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

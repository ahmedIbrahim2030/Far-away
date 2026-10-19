import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
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

export default function Item({ item, onDeleteItem, onToggleItem }) {
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

export default function Stats({ items }) {
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

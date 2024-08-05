export default function findItemsOver(items, threshold) {
  const itemsOverThreshold = [];

  for (const item of items) {
    if (item.qty > threshold) {
      itemsOverThreshold.push({ name: item.name, qty: item.qty });
    }
  }

  return itemsOverThreshold;
}

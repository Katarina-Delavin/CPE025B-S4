function getInventoryValuation(inventory) {
    const result = {};
    for (const item of inventory) {
        const { qty, price, category } = item;
        if (qty > 0) {
            const value = qty * price;
            if (result[category] === undefined) {
                result[category] = value;
            } else {
                result[category] += value;
            }
        }
    }
    return result;
}

// Test Code for Task 2
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory));

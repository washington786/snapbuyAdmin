import type { FinancialRecord, InventoryItem, Order, Recipe, Supplier } from "./types";


export const inventoryData: InventoryItem[] = [
    { id: '1', name: 'Apples', stock: 5, expiry: '2023-12-01', category: 'fruit' },
    { id: '2', name: 'Milk', stock: 8, expiry: '2023-11-15', category: 'dairy' },
];

export const supplierData: Supplier[] = [
    { id: 's1', name: 'Fresh Farms', contact: 'contact@freshfarms.com', items: ['Apples'] },
    { id: 's2', name: 'Dairy Co.', contact: 'sales@dairyco.com', items: ['Milk'] },
];

export const recipeData: Recipe[] = [
    {
        id: 'r1',
        name: 'Fruit Salad',
        ingredients: [
            { name: 'Apples', quantity: '2 cups' },
            { name: 'Bananas', quantity: '1 cup' },
        ]
    },
];

export const orderData: Order[] = [
    {
        id: 'ord-1',
        orderNumber: '#1001',
        customer: 'John Doe',
        items: [
            { productId: '1', name: 'Apples', quantity: 2, price: 1.99 },
            { productId: '2', name: 'Milk', quantity: 1, price: 3.49 },
        ],
        status: 'completed',
        total: 7.47,
        date: '2023-11-01',
        paymentMethod: 'Credit Card',
    },
];

export const financialData: FinancialRecord[] = [
    {
        id: 'fin-1',
        date: '2023-11-01',
        orderId: 'ord-1',
        amount: 7.47,
        type: 'revenue',
        category: 'grocery',
    }
];
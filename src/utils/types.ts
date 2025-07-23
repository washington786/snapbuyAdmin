export interface InventoryItem {
    id: string;
    name: string;
    stock: number;
    expiry: string;
    category: 'fruit' | 'vegetable' | 'dairy';
}

export interface Supplier {
    id: string;
    name: string;
    contact: string;
    items: string[];  // e.g., ['Apples', 'Milk']
}

export interface Recipe {
    id: string;
    name: string;
    ingredients: { name: string; quantity: string }[];
}

export interface Order {
    id: string;
    orderNumber: string;
    customer: string;
    items: {
        productId: string;
        name: string;
        quantity: number;
        price: number;
    }[];
    status: 'pending' | 'completed' | 'cancelled';
    total: number;
    date: string;
    paymentMethod: string;
}

export interface FinancialRecord {
    id: string;
    date: string;
    orderId: string;
    amount: number;
    type: 'revenue' | 'expense';
    category: string;
}
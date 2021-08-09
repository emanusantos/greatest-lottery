export interface Games {
    type: string; 
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
};

export interface User {
    name: string,
    email: string,
    password: string,
    games: [];
};

export interface CartItem {
    id: string;
    numbers: string;
    price: number;
    color: string;
    type: string;
};



export interface Games {
    type: string; 
    description: string;
    range: number;
    price: number;
    'max_number': number;
    color: string;
    'min_cart_value': number;
};

export interface User {
    name: string,
    email: string,
    password: string,
    games: Bet[] | null
};

export interface Bet {
    id: string;
    numbers: string;
    price: number;
    color: string;
    type: string;
};



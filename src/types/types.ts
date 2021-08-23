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
    id: number;
    name: string;
    email: string;
};

export interface Bet {
    id: string;
    game_id: number;
    numbers: string;
    price: number;
    color: string;
    type: string;
};



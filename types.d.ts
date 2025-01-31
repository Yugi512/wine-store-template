import { userInfo } from "os";

interface WineBottle {
        id: number;
        title: string;
        ml: number;
        price: number;
        rating: number;
        availability: boolean;
        country: string;
        region: string;
        brand: string;
        Varietal: string;
        type: string;
        abv: number;
        description: string;
        reviews: Review[];
}

interface Review {
    uuid: number;
    userName: string;
    review: string;
}


interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    cart: Cart;
    reviews: Review[];
}

interface AuthCredentials{
    email: string;
    password: string;
}

interface Cart {
    id: number;
    items: CartItem[];
}

interface CartItem {
    id: number;
    quantity: number;
    wineBottle: WineBottle;
}

interface Order {
    id: number;
    user: User;
    items: CartItem[];
    total: number;
    date: Date;
}

interface State {
    user: User;
    wineBottles: WineBottle[];
    orders: Order[];
}

interface Action {
    type: string;
    payload: any;
}

interface Dispatch {
    (action: Action): void;
}

interface Reducer {
    (state: State, action: Action): State;
}

interface Context { 
    state: State;
    dispatch: Dispatch;
}


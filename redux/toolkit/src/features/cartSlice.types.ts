export interface CartItem {
  id: number;
  title: string;
  price: number;
}

export interface CartSliceState {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export type AddToCartAction = { payload: CartItem };
export type RemoveFromCartAction = { payload: Omit<CartItem, "title"> };

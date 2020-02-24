export interface ICartState {
  data: IProduct[];
}

export interface IProduct {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  product_url: string;
}

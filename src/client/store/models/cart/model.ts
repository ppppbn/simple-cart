import { createModel, ModelConfig } from '@rematch/core';
import { ICartState, IProduct } from './interface';
import { Product } from '@client/common';

const cartModel: ModelConfig<ICartState> = createModel({
  state: {
    data: [],
  },
  reducers: {
    updateCart: (state: ICartState, payload: IProduct[]) => {
      return {
        ...state,
        data: payload,
      };
    },
    addToCart: (state: ICartState, payload: Product) => {
      const existedProduct = (state.data || []).find((v: Product) => v._id === payload._id);
      return {
        ...state,
        data: existedProduct ? (state.data || []).map((v: IProduct) => {
          if (v._id === payload._id) {
            return {
              ...v,
              quantity: (v.quantity || 0) + 1,
            };
          } else {
            return v;
          }
        }) : [
          ...(state.data || []),
          {
            ...payload,
            quantity: 1,
          },
        ],
      };
    },
    changeQuantity: (state: ICartState, payload: IProduct) => {
      return {
        ...state,
        data: (state.data || []).map((v: IProduct) => {
          if (v._id === payload._id) {
            return {
              ...v,
              quantity: payload.quantity,
            };
          } else {
            return v;
          }
        }),
      };
    },
    removeProduct: (state: ICartState, payload: string) => {
      return {
        ...state,
        data: (state.data || []).filter((v: IProduct) => v._id !== payload),
      };
    },
  },
  effects: {
    // Async requests are here
  },
});

export default cartModel;

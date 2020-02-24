import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import cartModel from './models/cart/model';
// loading plugin
const loadingOptions = {};
const loading = createLoadingPlugin(loadingOptions);

// init store
export const initStore = (initialState = {}) => {
  return init({
    models: {
      cartModel,
    },
    redux: {
      initialState,
    },
    plugins: [loading],
  });
};

import commonReducer from './common/slice';

export const createRootReducer = () => ({
  common: commonReducer,
});

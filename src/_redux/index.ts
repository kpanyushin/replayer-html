import commonReducer from './common/slice';
import replayerReducer from './replayer/slice';

export const createRootReducer = () => ({
  common: commonReducer,
  replayer: replayerReducer,
});

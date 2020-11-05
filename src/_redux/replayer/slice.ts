import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getHandsHistory as getHandsHistoryApi } from 'api/requests';

export const getHandsHistory = createAsyncThunk(
  'replayers/getHandsHistory',
  async (hands: any) => {
    const response = await getHandsHistoryApi(hands);

    return response.data;
  }
);

export interface ReplayerState {
  data: Object,
  isFetching: boolean,
}

const initialState: ReplayerState = {
  data: {},
  isFetching: false,
};

const sliceName: string = 'replayer';

const replayerSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHandsHistory.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getHandsHistory.fulfilled, (state, action) => {
      state.isFetching = false;
      console.log(action);
      state.data = action.payload.result;
    });
    builder.addCase(getHandsHistory.rejected, (state) => {
      state.isFetching = false;
      alert('error');
    });
  }
});

export default replayerSlice.reducer;

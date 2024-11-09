import { RootState } from '@/store/store';
import { MessageType } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  messages: MessageType[];
};

const initialState: InitialStateType = {
  messages: [],
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    inputMessageToReduxStore: (state, action) => {
      if (action.payload.pathname === '/') {
        state.messages.push(action.payload);
      }
    }
  },
});

export const { inputMessageToReduxStore } = messageSlice.actions;

export const selectMessage = (state: RootState) => state.message;

export default messageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { Toast } from 'toastify-react-native';
import { getStorage } from "../utils/storage";

const storage = getStorage();

const initialState = {
  userId: storage.getItem('userId') || false,
  isLoggedIn: !!storage.getItem('userId')
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
      state.userId = storage.getItem('userId');
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.userId = false;
      Toast.success("Has cerrado sesión correctamente");
    }
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

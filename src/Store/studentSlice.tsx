import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface studentState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  isSignUp: boolean;
}
const initialState: studentState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: null,
  isSignUp: false,
};

export const   StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action: PayloadAction<studentState>) => {
      return { ...action.payload };
    },
  },
});
export default StudentSlice.reducer;
export const { setStudent } = StudentSlice.actions;

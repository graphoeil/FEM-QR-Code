// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isTouch:false
};

// Slice
const qrcodeSlice = createSlice({
	name:'qrcode',
	initialState,
	reducers:{
		// Is touch ?
		setIsTouch:(state) => {
			state.isTouch = true;
		}
	}
})

// Actions export
export const { setIsTouch } = qrcodeSlice.actions;

// Reducer export
export default qrcodeSlice.reducer;
// Imports
import { configureStore } from "@reduxjs/toolkit";
import qrcodeReducer from "./features/qrcodeSlice";

// Store
const store = configureStore({
	reducer:{
		qrcode:qrcodeReducer
	}
});

// Export
export default store;
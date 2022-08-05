// Imports
import React, { useEffect } from "react";
import "./css/displayMain.css";
import { useDispatch } from "react-redux";
import { setIsTouch } from "./store/features/qrcodeSlice";
import QRCode from "./components/QRCode";

// Modernizr
const Modernizr = window.Modernizr;

// Component
const App = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Is touch ?
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
	},[dispatch]);

	// Return
	return(
		<main>
			<QRCode/>
		</main>
	);

};

// Export
export default App;
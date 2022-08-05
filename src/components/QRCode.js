// Imports
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import qrImage from "../images/image-qr-code.png";

// SplitText
const SplitText = window.SplitText;
gsap.registerPlugin(SplitText);

// Component
const QRCode = () => {

	// Refs
	const QRRef = useRef();
	const tlQR = useRef();
	const tlQRRepeat = useRef();

	// Animation
	useEffect(() => {
		// Variables
		const QRCode = QRRef.current;
		const image = QRCode.querySelector('.image');
		const title = QRCode.querySelector('h1');
		const text = QRCode.querySelector('p');
		// TlLoop repeat
		const repeatTlLoop = () => {
			setTimeout(() => {
				tlQRRepeat.current.play();
			},4000);
		};
		// SplitText
		const titleSplit = new SplitText(title, { type:'words' });
		titleSplit.split({ type:'words' });
		// Timeline
		tlQR.current = gsap.timeline({ onComplete:repeatTlLoop });
		tlQR.current
		.set(image, { alpha:0, scale:1.2 })
		.set(titleSplit.words, { alpha:0, scale:2 })
		.set(text, { alpha:0, y:100 })
		.to(QRCode, { opacity:1, duration:0.5, ease:'power4.out' })
		.to(image, { alpha:1, scale:1, duration:0.5, ease:'power4.out' })
		.to(titleSplit.words, { alpha:1, scale:1, duration:0.3, ease:'power1.inOut', stagger:{ each:0.1 } },'-=0.3')
		.to(titleSplit.words,{ duration:0.1, color:'#2b7dfa', scale:0.9, stagger:{ each:0.1 } },'words')
		.to(titleSplit.words,{ duration:0.2, color:'black', scale:1, stagger:{ each:0.1 } },'words+=0.1')
		.to(text, { alpha:1, y:0, duration:0.5, ease:'power4.out' });
		// Timeline repeat
		tlQRRepeat.current = gsap.timeline({ paused:true, repeat:-1, repeatDelay:4 });
		tlQRRepeat.current
		.to(titleSplit.words,{ duration:0.1, color:'#2b7dfa', scale:0.9, stagger:{ each:0.1 } },'words')
		.to(titleSplit.words,{ duration:0.2, color:'black', scale:1, stagger:{ each:0.1 } },'words+=0.1')
		// Clean up
		return () => {
			tlQR.current.kill();
			tlQRRepeat.current.kill();
		};
	},[]);

	// Return
	return(
		<Wrapper ref={ QRRef }>
			<div className="image">
				<img src={ qrImage } alt="white qr code" />
			</div>
			<h1>Improve your front-end skills by building projects</h1>
			<p>Scan the QR code to visit Frontend Mentor and take 
				your coding skills to the next level</p>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	width: calc(100% - 30px);
	max-width: 330px;
	margin: 15px;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	overflow: hidden;
	text-align: center;
	opacity: 0;
	.image{
		width: 100%;
		border-radius: 10px;
		overflow: hidden;
		margin: 0 0 25px 0;
		img{
			display: block;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	h1{
		padding: 0 15px;
		font-size: 20px;
		font-weight: 700;
		line-height: 1.3em;
		margin: 0 0 20px 0;
	}
	p{
		padding: 0 15px;
		font-size: 15px;
		line-height: 1.3em;
		color: var(--lightGrey);
	}
`;

// Export
export default QRCode;
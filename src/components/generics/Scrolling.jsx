import { useState, useEffect } from "react";

const Scrolling = () => {
	const [scrollY, setScrollY] = useState(0);

	function logit() {
		setScrollY(window.pageYOffset);
		// console.log(new Date().getTime());
	}

	useEffect(() => {
		function watchScroll() {
		  	window.addEventListener("scroll", logit);
		}
		watchScroll();
		return () => {
		  	window.removeEventListener("scroll", logit);
		};
	});	

	return (
		{scrollY}
	);
};
    
export default Scrolling;
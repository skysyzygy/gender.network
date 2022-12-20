import React, { useState, useEffect } from "react";
import Arrow from '../public/ScrollTop.svg';
import Image from 'next/image'


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <div onClick={goToTop}><Image src={'/ScrollTop.svg'}  width="100" height="100"/></div>
            )}{" "}
        </div>
    );
};
export default ScrollToTop;
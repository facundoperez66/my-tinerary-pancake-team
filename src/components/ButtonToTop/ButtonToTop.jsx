import React from 'react'
import './Button.css'
export default function ButtonToTop() {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    
    <div className='ButtonTopContainer'>
        <button className='ButtonTop' onClick={scrollToUp}>
            <img src="https://static.vecteezy.com/system/resources/previews/011/646/224/non_2x/up-arrow-symbol-for-icon-design-png.png" alt="up"  />
        </button>
    </div>
  )
}


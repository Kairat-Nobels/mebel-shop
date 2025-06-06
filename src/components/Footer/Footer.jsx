import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: "#3a3a3a" }} className='d-flex flex-column flex-sm-row justify-content-between page-container p-5'>
            <div className="footer-left pt-2">
                <span className='text-white'>Copyright © 2025 Furniture Store</span>
            </div>
            <div className="footer-right pt-2">
                <span className='pe-1 text-white'>Made by</span>
                <span className='fw-bold' style={{ color: "#78909c", cursor: "pointer" }} onClick={() => { window.open("https://www.instagram.com/aitukv?igsh=MTJtMHZvZ3B2ZzVzcw%3D%3D&utm_source=qr ") }}>Developer</span>
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react';
import "./homeSale.scss";
import { useNavigate } from 'react-router-dom';

const HomeSale = () => {
    const navigate = useNavigate();
    return (
        <div className="home-sale page-container">
            <div className="sale-content">
                <div className="sale-title d-flex flex-column">
                    <h2 data-aos="fade-right">Распродажа!!</h2>
                    <h3 data-aos="fade-right" className='text-center text-sm-start'>Скидка 10% на все товары!</h3>
                    <button data-aos="fade-right" onClick={() => navigate("/shop")} className='general-button'>Купить сейчас</button>
                </div>
            </div>
        </div>
    )
}

export default HomeSale;
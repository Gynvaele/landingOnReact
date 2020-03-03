import React from "react";
import {NavLink} from "react-router-dom";
import "./style.scss";
import main_logo from "../../assets/img/main_logo.png"
import first from "../../assets/img/categories/1.png";
import second from "../../assets/img/categories/2.png";
import tird from "../../assets/img/categories/3.png";
import fourth from "../../assets/img/categories/4.png";
import fifth from "../../assets/img/categories/5.png";
import sixth from "../../assets/img/categories/6.png";
import seventh from "../../assets/img/categories/7.png";
import cart from "../../assets/img/cart.png"
import search from "../../assets/img/search.png"


const ShopHeader = () => {
    return (
        <div className="container">
            <div className="logo-container">
                <img src={main_logo} alt="main_logo" className={"main_logo"}/>
            </div>
            <div className="wrapper">
                <NavLink to={"/cart"} className={"cart"}>
                    <img src={cart} alt="cart-logo" className={"cart-logo"}/>
                    <span>Корзина</span>
                </NavLink>
                <div>
                    <NavLink to="/" className="language">RU</NavLink>
                    <NavLink to="/UA" className="language">UA</NavLink>
                </div>
            </div>
        </div>
    )
};


const Search = () => {
    return (
        <div className="search">
            <div className="container">
                <div className={"wrapper"}>
                    <img src={search} alt="search"/>
                        <input type="search" placeholder={"Поиск по сайту"} className={"search-input"}/>
                </div>
            </div>
        </div>
    )
};

const Categories = () => {
    return (
        <div className="container">
            <NavLink to={'./'}>
                <img src={first} alt="first"/>
                <div>Вентиляция и кондиционирование</div>
            </NavLink>
            <NavLink to={'./second'}>
                <img src={second} alt="second"/>
                <div>Отопление</div>
            </NavLink>
            <NavLink to={'./tird'}>
                <img src={tird} alt="tird"/>
                <div>Альтернативная энергетика</div>
            </NavLink>
            <NavLink to={'./fourth'}>
                <img src={fourth} alt="fourth"/>
                <div>Водоснабжение и водоочистка</div>
            </NavLink>
            <NavLink to={'./fifth'}>
                <img src={fifth} alt="fifth"/>
                <div>Осушители, очистители, увлажнители</div>
            </NavLink>
            <NavLink to={'./sixth'}>
                <img src={sixth} alt="sixth"/>
                <div>Электричество</div>
            </NavLink>
            <NavLink to={'./seventh'}>
                <img src={seventh} alt="seventh"/>
                <div>Акции</div>
            </NavLink>
        </div>
    )
};


const Breadcrumbs = () => {
    return (
        <div className="container">
            <div>Breadcrumbs</div>
        </div>
    )
};

export const Shop = () => {
    return (
        <section id="shop">
            <ShopHeader/>
            <Search/>
            <Categories/>
            <Breadcrumbs/>
        </section>
    )
};
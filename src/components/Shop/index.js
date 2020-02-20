import React from "react";
import {Route, NavLink} from "react-router-dom";
import "./style.scss";
import {category} from "../../assets/data"
import main_logo from "../../assets/img/main_logo.png"

const ShopHeader = () => {
    return (
        <div className="container">
            <div className="logo-container">
                <img src={main_logo} alt="main_logo" className={"main_logo"}/>
            </div>
            <div className="wrapper">
                <div>
                    <img src="" alt="cart-logo" className={"cart-logo"}/>
                    <NavLink to={"/cart"}>Корзина</NavLink>
                </div>
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
                    <div className="search-logo">Search logo</div>
                    <div className="search-input">
                        <input type="text" placeholder={"search"}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const Categories = () => {
    return (
        <div className="container">
            {category.map(elm => {
                return (
                    <NavLink to={elm.path} className="categories-block" key={elm.id}>
                        {elm.title}
                    </NavLink>
                )
            })}
        </div>
    )
};


const ShopCategoryLayout = (props) => {
    return (
        <div className={"category_wrapper"}>
            {props.children}
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
            <Route
                path="/"
                render={(props) => {
                    return (
                        <ShopCategoryLayout>
                            <Breadcrumbs {...props}/>
                            <div className="container">
                                <div>Category title</div>
                            </div>
                        </ShopCategoryLayout>
                    )
                }}/>
        </section>
    )
};
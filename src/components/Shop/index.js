import React from "react";
import "../style.scss"

const ShopHeader = () => {
    return <div className="container">
        <div className="col">Logo</div>
        <div className="col">Korzina + Lang</div>
    </div>
};


const Search = () => {
    return <div className="search">
        <div className="container">
            <div className="search-logo">Search logo</div>
            <div className="search-input">
                <input type="text" placeholder={"search"}/>
            </div>
        </div>
    </div>
};


export const Shop = () => {
    return (
        <section id="shop">
            <ShopHeader/>
            <Search/>
            <div className="container">
                <div className="col">col 1</div>
                <div className="col">col 2</div>
            </div>
        </section>
    )
};
import React, {PureComponent} from "react";
import {NavLink} from "react-router-dom";
import "./style.scss"

class Header extends PureComponent {
    render() {

        return (
            <header id="header">
                <div className="container">
                    <div className="col navi">
                        <NavLink to={"/"} className={"navigationButton"}>О компании</NavLink>
                        <NavLink to={"/objects"} className={"navigationButton"}>Объекты</NavLink>
                        <NavLink to={"/3"} className={"navigationButton"}>Отзывы</NavLink>
                        <NavLink to={"/4"} className={"navigationButton"}>Доставка</NavLink>
                        <NavLink to={"/video"} className={"navigationButton"}>Видео</NavLink>
                        <NavLink to={"/contacts"} className={"navigationButton"}>Контакты</NavLink>
                    </div>
                    <div className="col currentPage">
                        <NavLink to={"/"} className="changeButtons">Магазин</NavLink>
                        <NavLink to={"/anotherLayout"} className="changeButtons">Услуги</NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
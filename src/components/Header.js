import React from "react";
import PropTypes from "prop-types";

import NavItem from "./NavItem";

const Header = function(props) {
    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">
                    My logo
                </a>
                <nav>
                    <ul className="nav-list">
                        {
                            props.items.map((listItem) => {
                                return (
                                    <NavItem key={listItem.element} link={listItem.link}>
                                        {listItem.element}
                                    </NavItem>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string.isRequired,
        element: PropTypes.string.isRequired,
    })).isRequired,
};

export default Header;
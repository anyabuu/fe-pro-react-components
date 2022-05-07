import React from 'react';
import PropTypes from 'prop-types';

const NavItem = function (props) {
  return (
    <li className="nav-list__item">
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

NavItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;

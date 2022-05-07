import React from "react";
import PropTypes from 'prop-types';


function Article(props) {
    return (
        <li className="list__item">
                {props.children}
        </li>
    );
}


Article.propTypes = {
    children: PropTypes.array.isRequired,
}

export default Article;
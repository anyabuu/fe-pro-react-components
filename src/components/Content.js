import React from "react";
import PropTypes from "prop-types";

import Article from "./Article";

const Content = function (props) {
    return (
        <main>
            <section className="posts">
                <div className="container">
                    <h1>
                        Posts
                    </h1>
                    <ul className="list">
                        {
                            props.items.map((article) => {
                                return (
                                    <Article key={article}>
                                        <h2>{article.title}</h2>
                                        <p>{article.text}</p>
                                    </Article>
                                );
                            })
                        }
                    </ul>
                </div>
            </section>
        </main>
    );
};

Content.propTypes= {
        items: PropTypes.arrayOf(
            PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default Content;
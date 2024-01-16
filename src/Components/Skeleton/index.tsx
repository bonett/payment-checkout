/* eslint-disable */
import React from "react";

function Skeleton() {
    return (
        <div className="skeleton-content">
            {
                [1, 2, 3, 4, 5, 6].map(i => (
                    <article key={i} className="article-content skeleton-wrapper">
                        <div className="article-content_thumb">
                            <div className="skeleton skeleton-img"></div>
                        </div>
                        <div className="article-content_description">
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                        </div>
                    </article>
                ))
            }
        </div>
    );
}

export default Skeleton;

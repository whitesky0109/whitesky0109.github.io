import React from "react"

import "./tags.css"
import { Link } from "gatsby";

const TechTag = (props) => {
    const { tag, tech, name, size, color, img } = props;

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button
                    className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: `${color}` }}>
                            <title>{tech}</title>
                            {img != null && <image href={img} width={size} height={size} />}
                            {name != null && (
                                Array.isArray(name)
                                    ? (name.map((n, i) => <path key={i} d={n} />))
                                    : (<path d={name} />)
                            )}
                        </svg>
                    </div>
                </button>
            </Link>

        </div>

    )
}

export default TechTag;

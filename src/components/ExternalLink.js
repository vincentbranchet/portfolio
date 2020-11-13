import React from 'react';

function ExternalLink(props) {
    return (
        <a className={`link ${props.className}`} href={props.href} target={props.target}>
            <div className="linkContent">
                {props.text}
            </div>
        </a>
    );
}

export default ExternalLink;
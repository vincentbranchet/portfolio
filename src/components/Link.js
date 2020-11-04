import React from 'react';

function Link(props) {
    return (
        <a className={`link ${props.className}`} href={props.href} target={props.target}>
            {props.text}
        </a>
    );
}

export default Link;
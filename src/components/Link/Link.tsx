import React from "react";
import './Link.css';

interface LinkProps {
    text: string;
}

export const Link: React.FC<LinkProps> = (props) =>{

    return <a className="Link">
        {props.text}
    </a>;
}
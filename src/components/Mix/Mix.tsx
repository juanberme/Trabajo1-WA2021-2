import React from "react";
import './Mix.css';

interface MixProps {
    mixImage: string;
    mixTitle: string;
    mixDescription: string;
}

export const Mix: React.FC<MixProps> = (props) =>{
    return <div className='Mix'>
        <img className='Mix__image' src={props.mixImage}/>
        <div className='Mix__info'>
            <h2 className='Mix__title'>{props.mixTitle}</h2>
            <p className='Mix__description'>{props.mixDescription}</p>
        </div>
    </div>;
}
import React from "react";
import './Singer.css';

interface SingerProps { 
    singerImage: string;
    singerTitle: string;
    singerSubscribers: string; 
}

export const Singer: React.FC<SingerProps> = (props) =>{
    return <div className='Singer'>
        <img className='Singer__image' src={props.singerImage}/>
        <div className='Singer__info'>
            <h2 className='Singer__title'>{props.singerTitle}</h2>
            <p className='Singer__subscribers'>{props.singerSubscribers}</p>
        </div>
    </div>;
}
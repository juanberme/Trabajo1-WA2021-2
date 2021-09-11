import React from "react";
import './Song.css';

interface SongProps { 
    songImage: string;
    songTitle: string;
    songSubscribers: string; 
}

export const Song: React.FC<SongProps> = (props) =>{
    return <div className='Song'>
        <img className='Song__image' src={props.songImage}/>
        <div className='Song__info'>
            <h2 className='Song__title'>{props.songTitle}</h2>
            <p className='Song__subscribers'>{props.songSubscribers}</p>
        </div>
    </div>;
}
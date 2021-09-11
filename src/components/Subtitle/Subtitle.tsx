import React from "react";
import './Subtitle.css';

interface SubtitleProps {
    subtitleImage: string;
    subtitleSong: string;
}

export const Subtitle: React.FC<SubtitleProps> = (props) =>{
    return <div className='subtitle'>
        <img className='subtitle__image' src={props.subtitleImage}/>
        <div className='subtitle__text'>
            <p className='subtitle__similar'>SIMILAR TO</p>
            <h2 className='subtitle__recommended'>{props.subtitleSong}</h2>
        </div>
    </div>
}
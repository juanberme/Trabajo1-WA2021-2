import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from '../Link/Link';
import { Title } from '../Title/Title';
import { Song } from '../Song/Song';
import { Subtitle } from '../Subtitle/Subtitle';
import { Mix } from '../Mix/Mix';
import { Singer } from '../Singer/Singer';

function App() {
  
  return <div>
    <nav className="App__nav">
      <Link text='Home'></Link>
      <Link text='Explore'></Link>
      <Link text='Library'></Link>
      <Link text='Search'></Link>
    </nav>
    <div className="App">
      <Title></Title>
        <div className='App__content'>
          <Song
          songImage='./SongImages/born_to_die.jpg' 
          songTitle='Born To Die'
          songSubscribers='90K Listeners'/>

          <Singer
          singerImage='./SongImages/chromatica.jpeg' 
          singerTitle='Lady Gaga'
          singerSubscribers='200k Subscribers'/>  
    
          <Song
          songImage='./SongImages/feel_special.jpeg' 
          songTitle='Feel Special'
          songSubscribers='12K Listeners'/>

          <Singer
          singerImage='./SongImages/kali_uchis.png' 
          singerTitle='Kali Uchis'
          singerSubscribers='85K Subscribers'/>

          <Song
          songImage='./SongImages/thank_you_next.jpeg' 
          songTitle='Thank You Next'
          songSubscribers='64K Listeners'/>

        </div>
      </div>
      <div className='Recommeneded'>
        <Subtitle
        subtitleImage='./SongImages/feel_special.jpeg'
        subtitleSong='Feel Special'
        ></Subtitle>
      </div>
      <div className='App__content'>
          <Song
          songImage='./SongImages/sunmi.jpeg' 
          songTitle='You can´t sit with us'
          songSubscribers='86K Listeners'/>

          <Singer
          singerImage='./SongImages/red_velvet.jpeg' 
          singerTitle='Red Velvet'
          singerSubscribers='20k Subscribers'/>

          <Mix
          mixImage='./SongImages/exid.jpg' 
          mixTitle='K-Pop Mix'
          mixDescription='Catallena, Russian Roulette, D...'/>

          <Song
          songImage='./SongImages/lilac.jpg' 
          songTitle='Celebrity'
          songSubscribers='85K Subscribers'/>

          <Song
          songImage='./SongImages/orange_caramel.jpg' 
          songTitle='Catallena'
          songSubscribers='64K Subscribers'/>

        </div>
      
  </div>
}

export default App;

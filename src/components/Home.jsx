import React from 'react'
import NavbarData from './NavbarData';
import VideoText from './VideoText';
import SimpleSlider from './Invester';
import TextUsers from '../TextUsers';
import Phone from './Phone';
import ColorFullPage from './ColorFullPage';
import QueAndAnsPage from './QueAndAnsPage';
import CardRow from './CardRow';
import CardIcon from './CardIcon';



const Home = () => {
  return (
    <div>
    <NavbarData/>
    <VideoText/> 
    <SimpleSlider/>
    <TextUsers/>
    <Phone/>
    <ColorFullPage/>
    <QueAndAnsPage/>
    <CardRow/> 
    <CardIcon/>

    </div>
  )
}

export default Home;

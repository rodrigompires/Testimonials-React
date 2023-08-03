import React from 'react';
import './Container.css';
import DanielCard from './DanielCard';
import JonathanCard from './JonathanCard';
import JeanetteCard from './JeanetteCard';
import PatrickCard from './PatrickCard';
import KiraCard from './KiraCard';

const Container = () => {
  return (
    <div className='container'>
        <DanielCard />
        <JonathanCard />
        <JeanetteCard />
        <PatrickCard />
        <KiraCard />
    </div>
  )
}

export default Container
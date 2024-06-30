import { useContext, useState } from 'react'
import myContext from '..';
import Hero from './Hero';
import Header from './Header';

const Main = () => {
  return (
    <div className={"original"}>
          <Header/>
          <Hero/>
    </div>
  )
}

export default Main
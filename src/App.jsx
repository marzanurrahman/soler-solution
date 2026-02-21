import React from 'react'
import Navigation from './components/shared/Navigation';
import Banner from './components/screens/Home/Banner';
import Experience from './components/screens/Home/Experience';

const App = () => {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <Experience/>
    </div>
  )
}

export default App
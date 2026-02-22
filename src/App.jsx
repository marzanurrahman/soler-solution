import React from 'react'
import Navigation from './components/shared/Navigation';
import Banner from './components/screens/Home/Banner';
import Experience from './components/screens/Home/Experience';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default App
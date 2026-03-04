import React from 'react'
import Navigation from './components/shared/Navigation';
import Banner from './components/screens/Home/Banner';
import Experience from './components/screens/Home/Experience';
import Footer from './components/shared/Footer';
import WhyChooseUs from './components/screens/Home/WhyChooseUs';

const App = () => {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <Experience/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default App
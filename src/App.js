import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <Videos />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
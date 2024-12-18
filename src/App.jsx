import React from 'react';
import Header from "./components/header/header.jsx";
import Nav from "./components/nav/nav.jsx";
import About from "./components/about/about.jsx";
import RecentWork from "./components/recentWork/recentWork.jsx";
import Services from "./components/services/services.jsx";
import Experience from "./components/experience/experience.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <RecentWork />
        <Contact />
        <Footer />
    </>
  )
}

export default App;
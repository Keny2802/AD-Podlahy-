import {
  Fragment
} from "react";

import ContactHeader from "./components/ContactHeader";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Garage from "./sections/Garage";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const Home = () => {
    return (
      <Fragment>
          <ContactHeader />
          <Header />
          <Hero />
          <Garage />
          <About />
          <Contact />
          <Footer />
      </Fragment>
    );
};

export default Home;
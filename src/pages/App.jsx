import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Projects from "./Projects";
import ContactUs from "./ContactUs";

function App() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}

export default App;

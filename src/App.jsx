import "./App.css";

import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MyExperience from "./Components/MyExperience";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import WhatIBring from "./Components/WhatIBring";

function App() {
  return (
    <div className="my-portfolio">

      {/* Cursor Glow */}
      <div className="glow"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main>

        <Hero />

        <AboutMe />

        <MySkills />

        <MyProjects />

        <MyExperience />

        <WhatIBring />

        <ContactMe />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
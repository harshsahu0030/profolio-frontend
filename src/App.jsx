import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  new LocomotiveScroll();

  return (
    <>
      {/* header  */}
      <header className="h-20 w-full px-2 md:px-4 lg:px-6 xl:px-8 fixed z-50 top-0 left-0 backdrop-blur-2xl">
        <Header />
      </header>

      <nav className="fixed z-50 top-1/2 transform -translate-y-1/2 right-0">
        <Navbar />
      </nav>

      {/* main  */}
      <main className="h-full w-full px-2 md:px-4 lg:px-6 xl:px-8 mt-20 flex flex-col gap-10">
        <Banner />
        <Projects />
        <Skills />
        <Experience />
        <Testimonial />
        <Contact />
      </main>

      {/* footer  */}
      <footer className="h-full w-full px-2 md:px-4 lg:px-6 xl:px-8 mt-5 pt-5 border-t-2 border-surface bg-surface">
        <Footer />
      </footer>
    </>
  );
};

export default App;

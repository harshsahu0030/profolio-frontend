import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      {/* header  */}
      <header className="h-20 w-full px-2 md:px-4 lg:px-6 xl:px-8 fixed z-50 top-0 left-0 backdrop-blur-2xl">
        <Header />
      </header>

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

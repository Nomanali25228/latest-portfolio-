import Header from "./(component)/header/Header";
import Services from "./(component)/services/Services";
import Skills from "./(component)/skills/Skills";
import Projects from "./(component)/Projects/Projects";
import Starts from "./(component)/starts/Starts";
import WorkTogether from "./(component)/workTogether/WorkTogether";
import Footer from "@/app/(component)/footer/Footer";

export default function Home() {
  return (
   <>
   <Header/>
   <Services/>
   <Skills/>
   <Projects/>
   <Starts/>
   <WorkTogether/>
   <Footer/>
   </>
  );
}

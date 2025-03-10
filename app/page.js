import About from "./components/About";
import Nav1 from '../components/Navbarr ';
import Main from "./components/Main";
import SkillsSection from "./components/Skills";
import Resume from "./components/Resume";
import Link from "next/link";
import Portofoilo from "./components/Portofoilo";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/Contact";
export default function Home({ about }) {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="w-[400px] max-lg:w-0 ">
        <Nav1 />   
        </div>
<div className="flex flex-col items-center justify-center w-full gap-4 ">
        <Main  />
       <Link href="/about"> <About  /></Link> 
        <SkillsSection/>
        <Resume />
        <Portofoilo />
        <Services />
        <Testimonials />
        <ContactSection />
</div>
      </div>
    </>
  );
}

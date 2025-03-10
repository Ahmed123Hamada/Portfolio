import Image from "next/image";
import portfoilo from "../assets/img/my-profile-img.jpg";
/////icon////
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CollectionsIcon from '@mui/icons-material/Collections';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import  PeopleIcon from '@mui/icons-material/People';
////AOS////
import Counter from "../components/Counts";
import AOS from "aos";
function About() {
  return (
    <div id="about" className="container  text-black text-start min-h-[100vh] flex flex-col items-center justify-center gap-16 ">
      {/* ////header/// */}
      <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-start justify-center w-full gap-4">
        <h1 className="text-5xl font-bold">About</h1>
        <span className="w-[100px] h-1 bg-black text-start"></span>
        <p className="text-lg font-sans">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      {/* ////Main/// */}
      <div data-aos="fade-up" data-aos-delay="200" className="flex  items-start justify-start w-full gap-6 max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <div>
          <Image
            className="max-w-[290px] max-lg:w-full "
            src={portfoilo}
            alt="portfoilo"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-8">
          <h2 className="text-3xl font-bold">
            UI/UX Designer & Web Developer.
          </h2>
          <p className="text-md font-sans ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* /////info//// */}
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="flex items-center justify-start  gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />
              <span className="text-lg font-bold">Birthday:</span>
              <span className="text-md font-sans">1 december 2002</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />

              <span className="text-lg font-bold">Age :</span>
              <span className="text-md font-sans">23</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />

              <span className="text-lg font-bold">website:</span>
              <span className="text-md font-sans">www.example.com</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />

              <span className="text-lg font-bold">Degree:</span>
              <span className="text-md font-sans">BIS System information</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />

              <span className="text-lg font-bold">Phone:</span>
              <span className="text-md font-sans">+20 01008659909</span>
            </div>

            <div className="flex items-center justify-start gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />

              <span className="text-lg font-bold">Email:</span>
              <span className="text-md font-sans">
                hamada123khedr@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />

              <span className="text-lg font-bold">City:</span>
              <span className="text-md font-sans">cairo Nasr City</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <KeyboardArrowRightIcon className="text-blue-400" />

              <span className="text-lg font-bold">Freelance:</span>
              <span className="text-md font-sans">Available</span>
            </div>
          </div>
          <p className="text-balance w-[50rem] max-md:w-full">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque.
          </p>
        </div>
      </div>
      {/* ////dwon/// */}
      <div className="flex items-start justify-start py-8 text-black w-full">
      <Counter />
      </div>
    </div>
  );
}

export default About;

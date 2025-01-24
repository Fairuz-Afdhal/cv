import IntroductionContainer from "./containers/IntroductionContainer";
import SocialsContainer from "./containers/SocialsContainer";
import EducationContainer from "./containers/EducationContainer";
import SkillsContainer from "./containers/SkillsContainer";
import JobsContainer from "./containers/JobsContainer";
import ProjectsContainer from "./containers/ProjectsContainer";
import AcademicContainer from "./containers/AcademicContainer";
import introduction from "./data/introduction.json";

const currentYear = new Date().getFullYear();

const Home = () => {
  return (
    <div className="container mx-auto px-4 print:px-0 print:my-0">
      <div className="my-4 print:my-1">
        <div className="text-center">
          <h1 className="text-3xl font-mono leading-tight print:text-2xl print:leading-none">
            {introduction.name}
          </h1>
        </div>
      </div>

      <div className="my-4 print:my-1">
        <div className="text-center">
          <SocialsContainer />
        </div>
      </div>

      <div className="my-4 flex space-x-2 justify-center print:hidden">
        <a href="javascript:window.print()">Print</a>
        <span>|</span>
        <a href="fairuz-afdhal-cv.pdf">Download pre-made PDF</a>
      </div>
      <hr className="my-4 border-t border-black print:my-1" />

      <div className="my-4 print:my-1">
        <div>
          <IntroductionContainer />
        </div>
      </div>

      <div className="my-4 print:my-1">
        <div>
          <h2 className="text-2xl font-bold print:text-xl print:leading-none">Skills</h2>
        </div>
      </div>
      <div className="my-4 print:my-1">
        <div>
          <SkillsContainer />
        </div>
      </div>

      <div className="my-4 print:my-1">
        <div>
          <h2 className="text-2xl font-bold print:text-xl print:leading-none">Professional Experiences</h2>
        </div>
      </div>
      <div className="my-4 print:my-1">
        <div>
          <JobsContainer />
        </div>
      </div>

      <div className="my-4 print:my-1">
        <div>
          <h2 className="text-2xl font-bold print:text-xl print:leading-none">Side Projects</h2>
        </div>
      </div>
      <div className="my-4 print:my-1">
        <div>
          <ProjectsContainer />
        </div>
      </div>

      <div className="my-4 print:my-1">
        <div>
          <h2 className="text-2xl font-bold print:text-xl print:leading-none">Education</h2>
        </div>
      </div>
      <div className="my-4 print:my-1">
        <div>
          <EducationContainer />
        </div>
      </div>

      <div className="my-4 print:my-1">
        <div>
          <h2 className="text-2xl font-bold print:text-xl print:leading-none">Academic Projects</h2>
        </div>
      </div>
      <div className="my-4 print:my-1">
        <div>
          <AcademicContainer />
        </div>
      </div>

      <hr className="my-4 border-t border-black print:my-1" />

      <div className="my-4 print:my-1">
        <div className="text-center">
          <span className="inline-block mr-4">
            <a
              className="text-blue-600 no-underline"
              href="https://afdh.al/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              © Fairuz Afdhal
            </a>
             | {currentYear} | 
            <a
              className="text-blue-600 no-underline"
              href="https://github.com/Fairuz-Afdhal/cv"
              rel="nofollow noreferrer"
              target="_blank"
            >
              Source Code
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
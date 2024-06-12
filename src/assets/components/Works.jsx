import { Link } from "react-router-dom";
import quizApp from "/assets/images/quiz-app.png"
import reminderApp from "/assets/images/reminder-app.png"
import simpleFormWithValidation from "/assets/images/simple-form-with-validations.png"
import restCountryAPI from "/assets/images/rest-country-api.png"

import Project from "./Project";

export default function Works() {
  return (
    <div className="bg-[#313131] pt-[100px] pb-[128px] px-[123px]">
      <div className="flex items-center gap-[2px]">
        <span className="border-t-[1.89842px] border-[#079211] w-[30px] text-[#313131]">ghjkjhgfd</span>
        <h3 className="text-[#079211] mb-[23px] font-bold">Recent Works</h3>
      </div>
      <div className="flex justify-between items-center font-bold text-white">
        <h4 className="text-[46px]">Some of my favorite projects.</h4>
        <Link to="/projects" className="border border-[#079211] px-[16px] py-[10px]">
          View All Projects
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-[20px] gap-y-[48px] mt-[90px]">
        <Project link="https://code-maestro-quizard.netlify.app" img={quizApp} project="A quiz app using HTML, CSS, and JavaScript"/>
        <Project link="https://reminderrealm.netlify.app" img={reminderApp} project="A reminder app using HTML, CSS, and JavaScript to access the Notification API"/>
        <Project link="https://tioluwa-uncontrolled-react-form.vercel.app" img={simpleFormWithValidation} project="An uncontrolled form with form validations using React and Tailwind"/>
        <Project link="https://rest-country-api-nine-pied.vercel.app" img={restCountryAPI} project="Made a country details website with the use of HTML, Tailwind CSS, and JS for fecthing from the rest-country API"/>
      </div>
    </div>
  );
}

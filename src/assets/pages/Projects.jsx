import banah from "/assets/images/banah.png"
import gadgetSite from "/assets/images/gadget-site.png"
import ssrTodoNext from "/assets/images/ssr-todos-next.png"
import bookDirectory from "/assets/images/node-js-and-mongo-db.png"
import quizApp from "/assets/images/quiz-app.png"
import reminderApp from "/assets/images/reminder-app.png"
import simpleFormWithValidation from "/assets/images/simple-form-with-validations.png"
import restCountryAPI from "/assets/images/rest-country-api.png"
import portfolioWebsite from "/assets/images/portfolio-website.png"
import tomorroClone from "/assets/images/tomorro-clone.png"
import miniEShop from "/assets/images/mini-e-shop.png"
import countzz from "/assets/images/countzz.png"

import Project from "../components/Project";

export default function Projects() {
  return (
    <div className="bg-[#313131] pt-[100px] pb-[128px] px-[10px] md:px-[50px] lg:px-[123px">
      <div className="flex items-center gap-[2px]">
        <span className="border-t-[1.89842px] border-[#079211] w-[30px] text-[#313131]">ghjkjhgfd</span>
        <h3 className="text-[#079211] mb-[23px] font-bold">Recent Works</h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center font-bold text-white">
        <h4 className="text-[26px] md:text-[46px]">Some of my favorite projects.</h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[48px] mt-[90px]">
        <Project link="https://countzz.netlify.app" img={countzz} project="Made a little project with HTML, CSS and JavaScript for bus loaders to count their passangers and keep a log of them."/>
        <Project link="https://code-maestro-tomorro.netlify.app" img={tomorroClone} project="I cloned the tomorro website with HTML, Bootstrap, JavaScript."/>
        <Project link="https://code-maestro-quizard.netlify.app" img={quizApp} project="A quiz app using HTML, CSS, and JavaScript."/>
        <Project link="https://reminderrealm.netlify.app" img={reminderApp} project="A reminder app using HTML, CSS, and JavaScript to access the Notification API."/>
        <Project link="https://my-mini-e-shop.netlify.app" img={miniEShop} project="Made a little project with React and Bootstrap when I first started learning React."/>
        <Project link="https://tioluwa-uncontrolled-react-form.vercel.app" img={simpleFormWithValidation} project="An uncontrolled form with form validations using React and Tailwind."/>
        <Project link="https://rest-country-api-nine-pied.vercel.app" img={restCountryAPI} project="I made a country details website with the use of HTML, Tailwind CSS, and JavaScript for fecthing from the rest-country API."/>
        <Project link="https://tioluwani-enoch-olubunmi.onrender.com" img={portfolioWebsite} project="Made my first portfolio website using the MERN stack. React and Tailwind CSS for the frontend Node JS, Express, and Nodemainler for sending mails in the backend."/>
        <Project link="https://github.com/CodeMaestro-dev/banah.js" img={banah} project="Start up your NodeJS projects with ease. No need to install Express, CORS, or the basic things you need for a NodeJS project. We got you covered."/>
        <Project link="https://gadget-e-commerce-website.vercel.app" img={gadgetSite} project="A gadget e-commerce website built with ReactJS, SASS/SCSS, Formik for from validations, and Redux for state management. However, I didn't make it much interactive. I was just trying to master my Frontend Cloning skills."/>
        <Project link="https://ssr-todo-app.vercel.app" img={ssrTodoNext} project="A simple todo app built with NextJS, TailwindCSS, and Redux for state management. I used the Next JS API Endpoints to make the API calls to the CRUD operations. I also leveraged Next JS Server Side Rendering to make the app interactive."/>
        <Project link="https://book-directory-1a97.onrender.com" img={bookDirectory} project="A book directory REST API with NodeJS, Express, and Mongoose using MongoDB as my database. I used the Node JS API Endpoints to make the API calls to the CRUD operations."/>
      </div>

      <p className="text-[#079211] text-[24px] text-center mt-[100px]">More still to come</p>
    </div>
  );
}

import { Link } from "react-router-dom";
import banah from "/assets/images/banah.png"
import gadgetSite from "/assets/images/gadget-site.png"
import ssrTodoNext from "/assets/images/ssr-todos-next.png"
import bookDirectory from "/assets/images/node-js-and-mongo-db.png"

import Project from "./Project";

export default function Works() {
  return (
    <div className="bg-[#313131] pt-[100px] pb-[128px] px-[10px] md:px-[50px] lg:px-[123px">
      <div className="flex items-center gap-[2px]">
        <span className="border-t-[1.89842px] border-[#079211] w-[30px] text-[#313131]">ghjkjhgfd</span>
        <h3 className="text-[#079211] mb-[23px] font-bold">Recent Works</h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center font-bold text-white">
        <h4 className="text-[26px] md:text-[46px]">Some of my favorite projects.</h4>
        <Link to="/projects" className="border border-[#079211] px-[16px] py-[10px] mt-[20px] lg:mt-0">
          View All Projects
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[48px] mt-[90px]">
        <Project link="https://github.com/CodeMaestro-dev/banah.js" img={banah} project="Start up your NodeJS projects with ease. No need to install Express, CORS, or the basic things you need for a NodeJS project. We got you covered."/>
        <Project link="https://gadget-e-commerce-website.vercel.app" img={gadgetSite} project="A gadget e-commerce website built with ReactJS, SASS/SCSS, Formik for from validations, and Redux for state management. However, I didn't make it much interactive. I was just trying to master my Frontend Cloning skills."/>
        <Project link="https://ssr-todo-app.vercel.app" img={ssrTodoNext} project="A simple todo app built with NextJS, TailwindCSS, and Redux for state management. I used the Next JS API Endpoints to make the API calls to the CRUD operations. I also leveraged Next JS Server Side Rendering to make the app interactive."/>
        <Project link="https://book-directory-1a97.onrender.com" img={bookDirectory} project="A book directory REST API with NodeJS, Express, and Mongoose using MongoDB as my database. I used the Node JS API Endpoints to make the API calls to the CRUD operations."/>
      </div>
    </div>
  );
}

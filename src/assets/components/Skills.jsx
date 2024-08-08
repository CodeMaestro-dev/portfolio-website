import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="text-white px-[10px] md:px-[50px] lg:px-[123px my-[120px]">
      <h2 className="font-bold text-[46px]">2+ years experience developing and building web applications and still learning new things.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mt-[90px]">
        <Skill
          title="Frontend develop"
          description="Specialize in responsive and interactive front-end development. With a great understanding of HTML, CSS, Bootstrap, Tailwind CSS, SASS/SCSS Vanilla JS, React, Redux, and Next JS"
        />

        <Skill
          title="Backend develop"
          description="Specialize in building RESTful APIs and back-end logics. With of Node JS, Express, Mongo DB"
        />
      </div>
    </div>
  );
}

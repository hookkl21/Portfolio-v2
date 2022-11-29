import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="bg-[#141417] w-full h-screen">
      {/* container */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-indigo-600">Hi my name is,</p>
        <h2 className="text-4xl sm:text-5xl my-3 text-[#cacaeb]">
          Masaki Hook
        </h2>
        <h2 className="text-4xl sm:text-5xl my-3 text-indigo-600">
          I am a
          <div className="typeWriter">
            <Typewriter
              options={{
                strings: ["Front-end", "Web", "HTML Email"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          Developer
        </h2>
        <p className="text-[#cacaeb] py-4 max-w-[850px] ">
          I specialize in HTML Email, Front-End, Web Development. Passionate
          about improving my skills and bringing out smiles and magic to the
          people through technology.
        </p>
        <div>
          <button className="text-[#cacaeb] bg-indigo-700 py-3 px-6 my-2 flex items-center rounded-md border-2 hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-indigo-600 hover:shadow-indigo-500/40">
            <Link
              to="projects"
              smooth={true}
              offset={50}
              duration={500}
              className="flex items-center"
            >
              View Work <HiArrowNarrowRight className="ml-2" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

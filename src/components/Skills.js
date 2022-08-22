import React from "react";
import HTML from "../assets/html.png";
import Mongo from "../assets/mongo.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import SASS from "../assets/sass-logo.png";
import Git from "../assets/git-logo.png";
import REACT from "../assets/react.png";
import Node from "../assets/node.png";
import TailWind from "../assets/tailwind.png";
import RESTAPI from "../assets/rest-logo.png";

function Skills() {
  return (
    <div
      name="skills"
      className="  w-full h-screen bg-[#19191E] text-indigo-600"
    >
      {/* container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl pt-4 pb-1 inline border-b-4 border-[#cacaeb]">
            Experience
          </p>
          <p className="text-[#cacaeb] my-2 py-4">
            Here are the technologies I am proficient in...
          </p>
        </div>
        {/* icon container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={CSS} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={JS} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={SASS} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>SASS</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={Mongo} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>Mongo</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={Git} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>Git</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={TailWind} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={REACT} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={Node} alt="HTML" className="py-2 w-20 mx-auto" />
            <p>Node</p>
          </div>
          <div className="shadow-md shadow-[#343442] hover:scale-110 duration-500">
            <img src={RESTAPI} alt="HTML" className="py-3 w-20 mx-auto" />
            <p className="pt-2">RestAPI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

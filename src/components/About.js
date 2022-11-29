import React from "react";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-[#9898B1] text-[#141417]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-6">
          <div className="sm:text-left py-8 pl4 mx-6">
            <p className="text-4xl font-bold inline border-b-4 border-indigo-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1250px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <img
              src={profile}
              alt="Masaki Hook"
              className="rounded-full sm:mt-4 mx-auto w-[65%]"
            />
          </div>
          <div className="pb-6">
            <p className="mx-3 pt-3 mt-4 text-1xl sm:tracking-wider leading-8">
              I am a Bachelor's of Computer Science Graduate from UCF
              (University of Central Florida). Although I have a relative
              degree, I have self studied in Front-End/Web and HTML Email
              development concepts, such as responsive HTML/CSS email template,
              JavaScript, React.js libralies, and Bootstrap/Tailwind css
              frameworks to name a few. Having a baseball background of 20
              years, I keep myself motivated, and practice essential skills
              daily to improve myself to stay on top of any technical
              advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

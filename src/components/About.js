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
          <div className="sm:text-right pb-8 pl4 mx-6">
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
              className="rounded-full sm:mt-4 mx-auto w-[75%]"
            />
          </div>
          <div>
            <p className="mx-3 pt-3 mt-4 text-1xl sm:tracking-wider leading-8">
              I am a Bachelor's of Computer Science Graduate from UCF
              (University of Central Florida). Although I have a relative
              degree, I have self studied in Front-End Web development concepts,
              such as CSS/HTML, JavaScript programming languages, React.js
              libralies, and Bootstrap/Tailwind css frameworks to name a few.
              Having a baseball background of 20 years, it helps me to keep
              myself motivated, and be able to practice my skills efficiently to
              improve myself in tech. I am determined to deliver advanced and
              efficient products to the team and clients. Blessed to be able to
              speak Japanese and English fluetly as a bonus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

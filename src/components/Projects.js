import React from "react";
import MelloBlog from "../assets/melloyelloblog.PNG";
import MelloShop from "../assets/melloyelloshop.PNG";
import MelloCrypto from "../assets/melloyellocrypto.PNG";
import mPort from "../assets/mport.PNG";

function Projects() {
  return (
    <div name="projects" className="bg-[#9898B1] w-full text-[#141417]">
      {/* container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* title */}
        <section className="pb-8">
          <p className="text-4xl inline border-b-4 text-[#141417] border-indigo-600">
            Projects
          </p>
          <p className="py-6">Here is my projects I have build</p>
        </section>
        {/* grid item */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
          {/* project1 */}
          <div className="bg-indigo-600 flex flex-col md:h-full md:w-full rounded-xl">
            <div className="py-4">
              <img
                src={MelloCrypto}
                alt="Crypto"
                className="w-[85%] md:w-[60%] m-auto rounded-lg hover:scale-110 duration-500"
              />
            </div>
            <div className="m-4 md:m-2">
              <h3 className="text-2xl mx-4 py-2 border-b-2 inline border-[#cacaeb]">
                MelloYello Crypto
              </h3>
              <article className="text-xl px-4 py-4">
                A cryptocurrency website, where users can view/search the
                trending crypto currency or any other favorite crypto currency.
                Currently working on implementing backend features for keep
                track of crypto/users. The site fetch CoinGecko API data.
              </article>
              <section className="mb-4 flex">
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://yellomellocrypto.netlify.app/">Deploy</a>
                </button>
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://github.com/hookkl21/YelloMelloCrypto">
                    Github
                  </a>
                </button>
                <div className="flex text-center items-center flex-wrap">
                  <p className="inline mx-1">React</p>
                  <p className="inline mx-1">Node/Express</p>
                  <p className="inline mx-1">Material UI</p>
                  <p className="inline mx-1">chart.js</p>
                </div>
              </section>
            </div>
          </div>
          {/* project 2 */}
          <div className="bg-indigo-600 flex flex-col h-[100%] rounded-xl">
            <div className="py-4">
              <img
                src={MelloShop}
                alt="Crypto"
                className="w-[85%] md:w-[60%] m-auto rounded-lg hover:scale-110 duration-500"
              />
            </div>
            <div className="m-4 md:m-2">
              <h3 className="text-2xl mx-4 py-2 border-b-2 inline border-[#cacaeb]">
                MelloYello Shop
              </h3>
              <article className="text-xl px-4 py-4">
                Full e-commerce furniture website. This site is more focused on
                front-end part of the side, so the website uses third party
                platform called Auth0 to keep authentication of user login/out
                and checkout process.
              </article>
              <section className="mb-4 flex">
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://melloyelloshop.netlify.app/">Deploy</a>
                </button>
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://github.com/hookkl21/e-commerce">Github</a>
                </button>
                <div className="flex text-center justify-around items-center flex-wrap">
                  <p className="inline mx-1">React</p>
                  <p className="inline mx-1">Auth0</p>
                  <p className="inline mx-1">Modal</p>
                </div>
              </section>
            </div>
          </div>
          {/* project 3 */}
          <div className="bg-indigo-600 flex flex-col h-[100%] rounded-xl">
            <div className="py-4">
              <img
                src={MelloBlog}
                alt="Crypto"
                className="w-[85%] m-auto rounded-lg hover:scale-110 duration-500"
              />
            </div>
            <div className="m-4 md:m-2">
              <h3 className="text-2xl mx-4 py-2 border-b-2 inline border-[#cacaeb]">
                MelloYello Blog
              </h3>
              <article className="text-xl px-4 py-4">
                This is the full stack blog website, user can register their
                account, post, view and write the blog post.This is more focused
                on the basic functionality of connecting between front-end and
                back-end to be full stack website.
              </article>
              <section className="mb-4 flex">
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://mello-yello-blog.herokuapp.com/">Deploy</a>
                </button>
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://github.com/hookkl21/melloyelloblog">
                    Github
                  </a>
                </button>
                <div className="flex text-center items-center flex-wrap">
                  <p className="inline mx-1">React/SASS</p>
                  <p className="inline mx-1">Node</p>
                  <p className="inline mx-1">Express</p>
                  <p className="inline mx-1">MongoDB</p>
                </div>
              </section>
            </div>
          </div>
          {/* project 4 */}
          <div className="bg-indigo-600 flex flex-col h-[100%] rounded-xl ">
            <div className="py-4">
              <img
                src={mPort}
                alt="Crypto"
                className="w-[85%] md:w-[65%] m-auto rounded-lg hover:scale-110 duration-500"
              />
            </div>
            <div className="m-4 md:m-2">
              <h3 className="text-2xl mx-4 py-2 border-b-2 inline border-[#cacaeb]">
                HTML/CSS Portfolio
              </h3>
              <article className="text-xl px-4 py-4">
                This is my old portfolio website using basic HTML and CSS. Also
                utilized SASS css pre-processor in this website for better
                folder management for easier and clean coding practices.
              </article>
              <section className="mb-4 flex">
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://mhookport.netlify.app/index.html">Deploy</a>
                </button>
                <button className="m-2 p-2 text-xl  border-2 border-[#cacaeb] rounded-lg hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-[#141417]">
                  <a href="https://github.com/hookkl21/github-user">Github</a>
                </button>
                <div className="flex text-center items-center flex-wrap">
                  <p className="inline mx-1">HTML</p>
                  <p className="inline mx-1">CSS</p>
                  <p className="inline mx-1">SASS</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;

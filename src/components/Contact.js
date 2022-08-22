import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full h-screen bg-[#141417] text-[#cacaeb] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bc4ad871-cda8-4ca5-bda3-8895d573db5d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-indigo-600">
            Contact
          </p>
          <p className="py-4">
            Submit the form below or send me an email: hookkl21@gmail.com
          </p>
          <p>Hoping to speak to you soon...</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="my-2 p-2 bg-[#2f1577] rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          email="email"
          className="my-2 p-2 bg-[#2f1577] rounded-md"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Please Write Message..."
          className="bg-[#2f1577] my-2 p-2 rounded-md"
        ></textarea>
        <button className="text-[#cacaeb] bg-[#2f1577] mx-auto py-3 px-6 my-2 flex items-center rounded-md border-2 hover:bg-[#cacaeb] hover:text-indigo-700 duration-500 hover:border-indigo-600 hover:shadow-indigo-500/40">
          Let's Talk
        </button>
      </form>
    </div>
  );
}

export default Contact;

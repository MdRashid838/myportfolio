import React from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const contact = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    name: "Email",
    contact: "officialmdrashidali@gmail.com",
    link: "officialmdrashidali@gmail.com",
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    name: "Whatsapp",
    contact: "8757700303",
    link: "8757700303",
  },
];

const Contact = () => {
  return (
    <div className="md:max-w-[80%] w-full m-auto">
      <div className="flex flex-col justify-center items-center py-8 gap-1">
        <h1 className="text-3xl font-semibold text-[#313131]">Contact Us</h1>
        <p className="text-sm font-medium text-gray-700">Most Recent Work</p>
      </div>
      <div className="flex md:flex-row flex-col gap-10 md:gap-4 md:px-10 p-4">
        <div className="w-full">
          <div className="max-w-sm flex flex-col sm:flex-col justify-center gap-4 md:gap-6">
            <h1 className="text-gray-600 text-lg font-semibold text-center mb-2">
              Talk to me
            </h1>
            {contact.map((contact) => (
              <div
                key={contact.id}
                className=" flex flex-col gap-2 items-center p-5 border border-gray-300 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-4 flex flex-col gap-1 items-center justify-between">
                  <span className="text-2xl text-gray-600">
                    {" "}
                    {contact.icon}{" "}
                  </span>
                  <a href="https://wa.me/qr/NVYCLJX2TCX2A1" className="text-sm font-semibold text-gray-600">
                    {contact.name}
                  </a>
                  <a
                    href={`${contact.id == 1 ? "mailto:" : "tel:"}${contact.contact}`}
                    className="text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    {contact.contact}{" "}
                  </a>
                </div>
                <a
                  href={contact.link}
                  className="group flex flex-row gap-1 items-center text-gray-500 hover:text-gray-600 font-medium text-sm"
                >
                  Write me
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <form>
            <h2 className="text-gray-600 text-lg font-semibold text-center mb-6 md:mb-8">
              Write me your project
            </h2>
            <div className="flex flex-col gap-7">
              <label className="relative">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="border w-full border-gray-400 px-5 py-4 rounded-2xl focus:border-gray-300 hover:border-gray-500"
                />
                <span className="absolute bg-white px-1 text-sm text-gray-600 left-4 -top-3">
                  Name
                </span>
              </label>
              <label className="relative">
                <input
                  type="text"
                  placeholder="Enter your email..."
                  className="border w-full border-gray-400 px-5 py-4 rounded-2xl focus:border-gray-300 hover:border-gray-500"
                />
                <span className="absolute bg-white px-1 text-sm text-gray-600 left-4 -top-3">
                  Email
                </span>
              </label>
              <label className="relative">
                <textarea
                  type="textarea"
                  placeholder="Write about your project..."
                  className="border w-full h-50 border-gray-400 px-5 py-4 rounded-2xl focus:border-gray-300 hover:border-gray-500"
                />
                <span className="absolute bg-white px-1 text-sm text-gray-600 left-4 -top-3">
                  Project
                </span>
              </label>
              <button className="group flex flex-row gap-1 justify-center items-center text-lg text-start hover:bg-[#313131] bg-[#3B3B3B] text-white w-52 px-5 py-4 rounded-2xl">
                Send Message
                <Send className="w-5 transition-transform duration-300 group-hover:rotate-10" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const isi = useRef();

  const coba = () => {
    isi.current.focus();
  };

  useEffect(() => {
    Aos.init();

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <section id="contact" className="w-screen p-2 h-screen text-center my-20 md:my-0">
      <div className="container m-auto">
        <div className="p-2 mt-20">
          <div data-aos="slide-up" data-aos-duration="1000" className="text-start">
            <h1 className="w-full font-bold text-2xl text-gray-500 md:text-3xl mb-0">Contact Me</h1>
            <div className="w-11/12 h-1 bg-gray-500 mt-0 mx-auto">
              <div className="mt-2 px-1 py-1"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center md:gap-[200px] mt-2 md:mt-12 py-2">
            <div data-aos="zoom-in" data-aos-duration="1000" className="text-start p-2">
              <h1 className="text-2xl md:text-5xl font-bold">You</h1>
              <h1 className="text-2xl md:text-5xl font-bold">Need</h1>
              <p className="font-semibold md:text-lg">beautifull desig for your</p>
              <p className="font-semibold md:text-lg">your website leave a</p>
              <p className="font-semibold md:text-lg">request</p>
              <div
                onClick={coba}
                className="border border-black w-10 md:w-16 text-center mt-2 md:mt-4 rounded-lg shadow-lg"
              >
                <i className="md:text-4xl">
                  <FontAwesomeIcon icon={faArrowRight} />
                </i>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="p-2">
              <form action="">
                <div className=" my-4">
                  <input
                    ref={isi}
                    type="text"
                    placeholder="e.g. David"
                    className="w-full p-2 focus:bg-gray-300 rounded-lg text-center shadow-lg"
                  />
                </div>
                <div className=" my-4">
                  <input
                    type="email"
                    placeholder="e.g. example@gmail.com"
                    className="p-2 focus:bg-gray-300 rounded-lg text-center shadow-lg"
                  />
                </div>
                <div className=" my-4">
                  <textarea
                    name=""
                    id=""
                    cols="22"
                    rows="5"
                    placeholder="write your message"
                    className="p-2 focus:bg-gray-300 rounded-lg text-center shadow-lg"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="border rounded-lg p-2 md:my-4 bg-blue-500 hover:bg-blue-700 font-semibold text-white"
                >
                  Kirim Pesan
                  <i className="ml-2">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

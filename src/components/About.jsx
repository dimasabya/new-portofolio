import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const [cek, setCek] = useState(false);

  const downloadCv = () => {
    const a = document.createElement("a");
    a.href = `/coba.pdf`;
    a.download = "coba.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const linkdin = () => {
    const a = document.createElement("a");
    a.href = "https://www.linkedin.com/in/dimas-abdul-yasir-275192259/";
    a.target = "blank";
    a.click();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCek(true);
    }, 200);

    return () => {
      clearTimeout(timeoutId); // Membersihkan timeout jika komponen dibongkar
    };
  }, []);
  return (
    <section id="about" className="w-screen p-4 bg-blue-400 h-screen text-center border-b-4">
      <div className="mt-[8rem]">
        <div className="flex flex-wrap justify-evenly sm:gap-3 mt-10">
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            className="outline outline-offset-2 outline-8 hover:outline-gray-700 rounded-full p-2 sm:p-5"
          >
            <img
              src="/dimas.jpg"
              alt="aura"
              className=" object-fit w-40 h-40 sm:w-80 sm:h-80 m-auto rounded-full shadow-lg hover:shadow-blue-700"
            />
          </div>
          <div data-aos="slide-left" data-aos-duration="1000" className="mt-10 p-1 text-center sm:text-start md:mt-14">
            <p className="font-semibold">Hi, Im</p>
            <h1 className="text-2xl md:text-4xl font-bold">
              <span className="text-red-700">Dimas Ab</span>dul Yasir
            </h1>
            <>
              <TypeAnimation
                data-aos="fade-up"
                sequence={["Fullstack Web Developer", 1000, "Freelancer", 1000]}
                wrapper="h3"
                repeat={Infinity}
                speed={50}
                className="font-bold text-lg md:text-2xl md:my-2 text-yellow-400"
              />
            </>
            <p className="text-sm md:text-lg">I`m an undergraduate student at Bina Sarana Informatika</p>
            {/* <p className="text-sm md:text-lg">the Local & Global Clients Web Development solutions</p> */}
            <button
              onClick={linkdin}
              data-aos="slide-up"
              data-aos-duration="1000"
              className="px-2 py-1 md:p-2 mt-[5rem] md:mt-6 bg-black rounded-lg text-white font-semibold hover:text-red-400"
            >
              Hire Me
            </button>
            <button
              onClick={downloadCv}
              data-aos="slide-up"
              data-aos-duration="1000"
              className="px-2 py-1 md:p-2 mt-[5rem] md:mt-6 bg-white rounded-lg text-black font-semibold hover:text-red-400 ml-4"
            >
              My CV <i className="fa-solid fa-download hover:text-red-400 delay-[.3s] ease-in"></i>
            </button>
            <div data-aos="slide-up" data-aos-duration="1000" className="mt-5">
              <i className="fa-brands fa-square-instagram text-2xl md:text-3xl mx-2  hover:scale-125"></i>
              <i className="fa-brands fa-square-facebook text-2xl md:text-3xl mx-2  hover:scale-125"></i>
              <i className="fa-brands fa-square-twitter text-2xl md:text-3xl mx-2  hover:scale-125"></i>
              <i className="fa-brands fa-square-github text-2xl md:text-3xl mx-2  hover:scale-125"></i>
              <i className="fa-brands fa-linkedin text-2xl md:text-3xl mx-2  hover:scale-125"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

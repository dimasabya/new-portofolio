import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import dimas from "../assets/dimas.png";

const About = () => {
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

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setCek(true);
  //   }, 200);

  //   return () => {
  //     clearTimeout(timeoutId); // Membersihkan timeout jika komponen dibongkar
  //   };
  // }, []);
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
              src={dimas}
              alt="dimas"
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
              className="w-40 h-auto sm:w-72  m-auto rounded-full"
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
              className="px-2 py-1 md:p-2 mt-[3rem] md:mt-6 bg-black rounded-lg text-white font-semibold hover:text-red-400"
            >
              Hire Me
            </button>
            <button
              onClick={downloadCv}
              data-aos="slide-up"
              data-aos-duration="1000"
              className="px-2 py-1 md:p-2 mt-[3rem] md:mt-6 bg-white rounded-lg text-black font-semibold hover:text-red-400 ml-4"
            >
              My CV{" "}
              <i className={`hover:text-red-400 delay-[.3s] ease-in`}>
                <FontAwesomeIcon icon={faDownload} />
              </i>
            </button>
            <div data-aos="slide-up" data-aos-duration="1000" className="mt-3">
              <i className="text-2xl md:text-3xl mx-1 md:mx-2">
                <FontAwesomeIcon icon={faInstagram} className="hover:scale-125" />
              </i>
              <i className="text-2xl md:text-3xl mx-1 md:mx-2  hover:scale-125">
                <FontAwesomeIcon icon={faFacebook} className="md:mx-2 hover:scale-125" />
              </i>
              <i className="text-2xl md:text-3xl mx-1 md:mx-2  hover:scale-125">
                <FontAwesomeIcon icon={faTwitter} className="md:mx-2 hover:scale-125" />
              </i>
              <i className="text-2xl md:text-3xl mx-1 md:mx-2  hover:scale-125">
                <FontAwesomeIcon icon={faLinkedin} className="md:mx-2 hover:scale-125" />
              </i>
              <i className="text-2xl md:text-3xl mx-1 md:mx-2  hover:scale-125">
                <FontAwesomeIcon icon={faGithub} className="md:mx-2 hover:scale-125" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [scrool, setScrool] = useState(0);
  const [active, setActive] = useState(false);
  const [colorAct, setColorAct] = useState(null);

  const toggle = (name) => {
    setActive(!active);
    setColorAct(name);
  };

  useEffect(() => {
    Aos.init();

    return () => {
      Aos.refresh();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrool(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`w-screen fixed top-0 z-10 p-4 ${
        scrool > 0 ? "bg-slate-100 border-b-4 border-slate-50" : "bg-transparent"
      } `}
    >
      <div className="flex flex-wrap items-center justify-around">
        <div className="p-1">
          <h1 data-aos="slide-down" data-aos-duration="1000" className={`text-3xl font-bold ${scrool > 0 ? "" : ""}`}>
            Portofolio
          </h1>
        </div>
        {/* hamburger */}
        <button onClick={toggle} className="block text-2xl md:hidden">
          <i className="w-2 h-5 fa-solid fa-bars">
            <FontAwesomeIcon icon={faBars} />
          </i>
        </button>
        {/* end hamburger */}
        <div
          className={`p-1 absolute top-0 ${
            active ? "right-0" : "right-[-100%]"
          } transition-all ease-in duration-[.5s] md:static`}
        >
          <div
            data-aos="slide-down"
            data-aos-duration="1000"
            className="flex flex-col justify-stretch gap-12 text-center h-screen w-[280px] bg-white md:w-fit md:bg-transparent md:h-min md:gap-0 md:flex-row"
          >
            <div onClick={toggle} className="relative w-full bg-red-500 md:static md:hidden">
              <i className="absolute fa-solid fa-x left-2 top-2 md:static">
                <FontAwesomeIcon icon={faX} />
              </i>
            </div>
            <a
              onClick={() => toggle("about")}
              href="#about"
              className={`mr-2.5 sm:mr-10 mt-5 md:mt-0 font-semibold hover:text-yellow-400 text-lg hover:underline  ${
                colorAct == "about" ? "text-yellow-400" : ""
              }`}
            >
              Home
            </a>
            <a
              onClick={() => toggle("skills")}
              href="#skill"
              className={`mr-2.5 sm:mr-10  font-semibold hover:text-yellow-400 text-lg hover:underline  ${
                colorAct === "skills" ? "text-yellow-400" : ""
              }`}
            >
              Skills
            </a>
            <a
              onClick={() => toggle("contact")}
              href="#contact"
              className={` font-semibold hover:text-yellow-400 text-lg hover:underline  ${
                colorAct === "contact" ? "text-yellow-400" : ""
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

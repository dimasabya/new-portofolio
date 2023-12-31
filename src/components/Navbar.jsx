import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrool, setScrool] = useState(0);
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

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
    <section className={`w-screen fixed top-0 z-10 p-4 ${scrool > 0 ? "bg-slate-100 border-b-4 border-slate-50" : "bg-transparent"} `}>
      <div className="flex flex-wrap justify-around items-center">
        <div className="p-1">
          <h1 className={`text-3xl font-bold ${scrool > 0 ? "" : ""}`}>Portofolio</h1>
        </div>
        <button onClick={toggle} className="block md:hidden text-2xl">
          <i className="fa-solid fa-bars w-2 h-5"></i>
        </button>
        <div className={`p-1 absolute top-0 ${active ? "right-0" : "right-[-100%]"} transition-all ease-in duration-[.5s] md:static`}>
          <div className="flex flex-col justify-stretch gap-12 text-center h-screen w-[280px] bg-white md:w-fit md:bg-transparent md:h-min md:gap-0 md:flex-row">
            <div onClick={toggle} className="relative w-full bg-red-500 md:static md:hidden">
              <i className="fa-solid fa-x absolute left-2 top-2 md:static"></i>
            </div>
            <a href="#about" className={`mr-2.5 sm:mr-10 mt-5 md:mt-0 font-semibold hover:text-yellow-400 text-lg hover:underline  ${scrool > 0 ? "" : ""}`}>
              About
            </a>
            <a href="#skill" className={`mr-2.5 sm:mr-10  font-semibold hover:text-yellow-400 text-lg hover:underline  ${scrool > 0 ? "" : ""}`}>
              Skill & Projects
            </a>
            <a href="#contact" className={` font-semibold hover:text-yellow-400 text-lg hover:underline  ${scrool > 0 ? "" : ""}`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offsets, setOffsets] = useState({});

  const element = [
    { id: "parax1", icon: "fa-square-js", label: "javascript", w: "w-10/12", color: "text-green-500", hover: "text-green-700", rate: "90%" },
    { id: "parax2", icon: "fa-node", label: "node js", w: "w-5/12", color: "text-green-500", hover: "text-green-700", rate: "50%" },
    { id: "parax3", icon: "fa-square-github", label: "github", w: "w-10/12", hover: "text-gray-700", rate: "90%" },
    { id: "parax4", icon: "fa-react", label: "react", w: "w-8/12", color: "text-blue-600", hover: "text-blue-700", rate: "80%" },
    { id: "parax5", icon: "fa-laravel", label: "laravel", w: "w-2/12", color: "text-red-400", hover: "text-red-500", rate: "15%" },
  ];

  useEffect(() => {
    const handleScrool = () => {
      const newOffset = {};
      element.forEach(({ id }) => {
        const elemen = document.getElementById(id).getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const threshold = windowHeight / 2;
        newOffset[id] = elemen < threshold ? window.scrollY : 0;
      });
      setOffsets(newOffset);
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScrool);
    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, [element]);
  return (
    <section id="skill" className="w-screen p-2 bg-blue-300 h-screen text-center">
      <div className="flex flex-wrap justify-around gap-1">
        <div className="p-2 mt-10 bg-white w-[500px] max-w-[500px]">
          <h1 className="w-full font-bold text-5xl">Skill</h1>
          <div className=" w-7/12 h-2 bg-blue-700 m-auto">
            <div className="mt-3 px-1 py-1"></div>
          </div>
          <div className="mt-2 p-2">
            <h3>Tech yang di dikuasai:</h3>
            <div className="flex flex-col gap-3 justify-start mt-4 p-2">
              {element.map(({ id, icon, label, color, hover, w, rate }) => {
                return (
                  <div className={`grid grid-cols-3 paralax-icon ${isVisible ? "show" : ""}`} style={{ transform: `translateY(${offsets["id"] * 0.3}px)` }} id={id} key={id}>
                    <i className={`fa-brands ${icon}  text-5xl ${color}  hover:${hover}`}>
                      <p className=" text-xs">{label}</p>
                    </i>
                    <div className={`w-[200px] relative h-2 bg-blue-500 hover:bg-blue-900 my-auto ml-2 paralax-inner`}>
                      <div className={`${w} absolute top-[-12px] bg-yellow-500 mt-3 px-1 py-1`}>
                        <span className="absolute right-0 top-[-20px] text-sm">{rate}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-2 mt-10 bg-blue-200 w-[500px]">
          <h1 className="w-full font-bold text-5xl">Projects</h1>
          <div className=" w-8/12 h-2 bg-blue-700 m-auto">
            <div className="mt-3 px-1 py-1"></div>
          </div>
          <div className="mt-2 p-2">
            <h3>Project yang pernah dibuat dengan tech yang sudah dikuasai:</h3>
            <div className=" grid grid-cols-4 gap-5 mt-4 p-2">
              <i className="fa-brands fa-square-js text-5xl text-green-500 hover:text-green-700"></i>
              <i className="fa-brands fa-node text-5xl text-green-500 hover:text-green-700"></i>
              <i className="fa-brands fa-square-github text-5xl hover:text-gray-700"></i>
              <i className="fa-brands fa-react text-5xl text-blue-600 hover:text-blue-700"></i>
              <i className="fa-brands fa-html5 text-5xl text-red-400 hover:text-red-500"></i>
              <i className="fa-brands fa-css3-alt text-5xl text-blue-500 hover:text-blue-600"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

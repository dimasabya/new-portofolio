/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [offsets, setOffsets] = useState({});

  const element = [
    {
      id: "parax1",
      icon: "fa-square-js",
      label: "javascript",
      w: "w-10/12",
      color: "text-green-500",
      hover: "text-green-700",
      rate: "90%",
    },
    {
      id: "parax2",
      icon: "fa-html5",
      label: "html",
      w: "w-10/12",
      color: "text-green-500",
      hover: "text-green-700",
      rate: "90%",
    },
    {
      id: "parax3",
      icon: "fa-css3-alt",
      label: "css",
      w: "w-10/12",
      color: "text-blue-500",
      hover: "text-blue-700",
      rate: "90%",
    },
    {
      id: "parax4",
      icon: "fa-react",
      label: "react",
      w: "w-8/12",
      color: "text-blue-600",
      hover: "text-blue-700",
      rate: "80%",
    },
    {
      id: "parax5",
      icon: "fa-php",
      label: "php",
      w: "w-6/12",
      color: "text-red-400",
      hover: "text-red-500",
      rate: "60%",
    },
  ];

  useEffect(() => {
    Aos.init();

    return () => {
      Aos.refresh();
    };
  }, []);

  // useEffect(() => {
  //   const handleScrool = () => {
  //     const newOffset = {};
  //     element.forEach(({ id }) => {
  //       const elemen = document.getElementById(id).getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;
  //       const threshold = windowHeight / 2;
  //       newOffset[id] = elemen < threshold ? window.scrollY : 0;
  //     });
  //     setOffsets(newOffset);
  //     setIsVisible(true);
  //   };

  //   window.addEventListener("scroll", handleScrool);
  //   return () => {
  //     window.removeEventListener("scroll", handleScrool);
  //   };
  // }, [element]);
  return (
    <section id="skill" className="w-screen p-2 h-screen text-center">
      <div className="container m-auto">
        <div className="p-2 mt-16 ">
          <div data-aos="slide-up" data-aos-duration="1000" className="text-start p-2">
            <h1 className="w-full font-bold text-2xl text-gray-500 md:text-3xl mb-0">My Skills</h1>
            <div className=" w-11/12 h-1 bg-gray-500 mt-0 mx-auto">
              <div className="mt-2 px-1 py-1"></div>
            </div>
            <p className="ml-2 text-gray-500">Here are my skill</p>
          </div>
          <div className="mt-2 p-2">
            <div className="flex flex-wrap gap-6 md:gap-2 justify-center mt-4 p-2">
              <div>
                {element.map(({ id, icon, label, color, hover, w, rate }) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className={`grid grid-cols-3`}
                      key={id}
                    >
                      <i
                        className={`fa-brands ${icon} text-3xl md:text-5xl ${color}  hover:${hover} `}
                      >
                        <p className=" text-xs">{label}</p>
                      </i>
                      <div
                        className={`w-[180px] relative h-2 bg-blue-500 hover:bg-blue-900 my-auto ml-2 paralax-inner`}
                      >
                        <div className={`${w} absolute top-[-12px] bg-yellow-500 mt-3 px-1 py-1`}>
                          <span className="absolute right-0 top-[-20px] text-sm">{rate}</span>
                        </div>
                      </div>
                    </div>
                    //   {/* <div className={`grid grid-cols-3 paralax-icon ${isVisible ? "show" : ""}`} style={{ transform: `translateY(${offsets["id"] * 0.3}px)` }} id={id} key={id}>
                    //   <i className={`fa-brands ${icon}  text-5xl ${color}  hover:${hover}`}>
                    //     <p className=" text-xs">{label}</p>
                    //   </i>
                    //   <div className={`w-[200px] relative h-2 bg-blue-500 hover:bg-blue-900 my-auto ml-2 paralax-inner`}>
                    //     <div className={`${w} absolute top-[-12px] bg-yellow-500 mt-3 px-1 py-1`}>
                    //       <span className="absolute right-0 top-[-20px] text-sm">{rate}</span>
                    //     </div>
                    //   </div>
                    // </div> */}
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="border rounded-lg shadow-2xl w-[110px] md:p-4 md:w-[180px] transform hover:scale-125"
                >
                  <i className="fa-brands fa-node-js text-[55px] md:text-[70px] mx-auto mt-3"></i>
                  <p>node js</p>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="border rounded-lg bg-gray-800 text-white w-[110px] md:p-4 md:w-[180px]"
                >
                  <i className="fa-solid fa-code text-[55px] md:text-[70px] mx-auto mt-3"></i>
                  <p>express js</p>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="border rounded-lg shadow-2xl w-[110px] md:p-4 md:w-[180px]"
                >
                  <i className="fa-solid fa-database text-[55px] md:text-[70px] mx-auto mt-3"></i>
                  <p>mysql</p>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="border rounded-lg bg-gray-800 text-white w-[110px] md:p-4 md:w-[180px]"
                >
                  <i className="fa-brands fa-laravel text-[55px] md:text-[70px] mx-auto mt-3"></i>
                  <p>laravel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

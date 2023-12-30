/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cek, setCek] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [offsets, setOffsets] = useState({});

  const element = [
    { id: "parax1", icon: "fa-square-js", label: "javascript", w: "w-10/12", color: "text-green-500", hover: "text-green-700" },
    { id: "parax2", icon: "fa-node", label: "node js", w: "w-5/12", color: "text-green-500", hover: "text-green-700" },
    { id: "parax3", icon: "fa-square-github", label: "github", w: "w-10/12", hover: "text-gray-700" },
    { id: "parax4", icon: "fa-react", label: "react", w: "w-8/12", color: "text-blue-600", hover: "text-blue-700" },
    { id: "parax5", icon: "fa-laravel", label: "laravel", w: "w-2/12", color: "text-red-600", hover: "text-red-700" },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCek(true);
    }, 200);

    return () => {
      clearTimeout(timeoutId); // Membersihkan timeout jika komponen dibongkar
    };
  }, []);

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
    <>
      {/* navbar */}
      <section className=" w-screen p-2 bg-blue-700">
        <div className="flex flex-wrap justify-around items-center">
          <div className="p-1">
            <img src="../public/aura.jpg" alt="aura" className=" w-14 h-14 border rounded-full" />
          </div>
          <div className="p-1">
            <a href="#about" className=" mr-2.5 sm:mr-10 text-white font-semibold hover:text-yellow-400 text-lg hover:underline">
              About
            </a>
            <a href="#skill" className="mr-2.5 sm:mr-10 text-white font-semibold hover:text-yellow-400 text-lg hover:underline">
              Skill & Projects
            </a>
            <a href="#contact" className=" text-white font-semibold hover:text-yellow-400 text-lg hover:underline">
              Contact
            </a>
          </div>
        </div>
      </section>
      {/* about */}
      <section id="about" className="w-screen p-2 bg-white h-screen text-center mt-4">
        <div className="mt-10">
          <h1 className="w-full font-bold text-5xl">About Me</h1>
          <div className=" w-4/12 h-2 bg-blue-700 m-auto">
            <div className="mt-3 px-1 py-1"></div>
          </div>
          <div className="flex flex-wrap justify-evenly items-center gap-3 mt-10">
            <div className={cek ? "show" : ""} style={{ opacity: 0 }}>
              <img src="../public/aura.jpg" alt="aura" className=" w-80 h-80 m-auto border rounded-b-lg shadow-lg hover:shadow-orange-700" />
            </div>
            <div className=" p-1">
              <p>Haii Saya Aura</p>
              <p>Saya seorang developer Front-End</p>
            </div>
          </div>
        </div>
      </section>
      {/* skill */}
      <section id="skill" className="w-screen p-2 bg-blue-300 h-screen text-center mt-4">
        <div className="flex flex-wrap justify-around">
          <div className="p-2 mt-10">
            <h1 className="w-full font-bold text-5xl">Skill</h1>
            <div className=" w-7/12 h-2 bg-blue-700 m-auto">
              <div className="mt-3 px-1 py-1"></div>
            </div>
            <div className="mt-2 p-2">
              <h3>Tech yang di dikuasai:</h3>
              <div className="flex flex-col gap-3 justify-start mt-4 p-2">
                {element.map(({ id, icon, label, color, hover, w }) => {
                  return (
                    <div className={`grid grid-cols-3 paralax-icon ${isVisible ? "show" : ""}`} style={{ transform: `translateY(${offsets["id"] * 0.3}px)` }} id={id} key={id}>
                      <i className={`fa-brands ${icon}  text-5xl ${color}  hover:${hover}`}>
                        <p className=" text-xs">{label}</p>
                      </i>
                      <div className={`${w} h-2 bg-blue-700 hover:bg-blue-900 my-auto ml-2 paralax-inner`}>
                        <div className="mt-3 px-1 py-1"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-2 mt-10">
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
      {/* contact */}
      <section id="contact" className="w-screen p-2 bg-white h-screen text-center mt-4">
        <div className="p-2 mt-10">
          <h1 className="w-full font-bold text-5xl">Contact Me</h1>
          <div className=" w-3/12 h-2 bg-blue-700 m-auto">
            <div className="mt-3 px-1 py-1"></div>
          </div>
          <p className=" block mt-4">Kirim pesan!</p>
          <div className=" w-[500px] bg-green-300 m-auto p-2 mt-4 rounded-lg">
            <form action="">
              <div className=" my-4">
                <label htmlFor="">Nama</label>
                <input type="text" placeholder="masukan nama anda" className="ml-2 p-1 focus:bg-gray-300 rounded-full text-center" />
              </div>
              <div className=" my-4">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="masukan email anda" className="ml-2 p-1 focus:bg-gray-300 rounded-full text-center" />
              </div>
              <div className=" my-4">
                <label htmlFor="">No Handphone</label>
                <input type="text" placeholder="masukan nama anda" className="ml-2 p-1 focus:bg-gray-300 rounded-full text-center" />
              </div>
              <button type="button" className="border rounded-lg p-2 my-4 bg-blue-500 hover:bg-blue-700 font-semibold text-white">
                Kirim Pesan
              </button>
            </form>
          </div>
          <div className="mt-10">
            <i className="fa-brands fa-square-instagram text-4xl mx-4 text-green-400 hover:text-green-600"></i>
            <i className="fa-brands fa-square-whatsapp text-4xl mx-4 text-green-400 hover:text-green-600"></i>
            <i className="fa-brands fa-linkedin text-4xl mx-4 text-blue-500 hover:text-blue-700"></i>
          </div>
        </div>
      </section>
      {/* footer */}
      <section className=" bg-blue-700">
        <div className="text-center p-2">
          <h2 className="font-bold text-white">@dimasabya9</h2>
        </div>
      </section>
    </>
  );
}

export default App;

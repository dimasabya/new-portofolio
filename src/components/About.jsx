import { useEffect, useState } from "react";

const About = () => {
  const [cek, setCek] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCek(true);
    }, 200);

    return () => {
      clearTimeout(timeoutId); // Membersihkan timeout jika komponen dibongkar
    };
  }, []);
  return (
    <section id="about" className="w-screen p-2 bg-white h-screen text-center mt-4">
      <div className="mt-10">
        <h1 className="w-full font-bold text-5xl">About Me</h1>
        <div className=" w-4/12 h-2 bg-blue-700 m-auto">
          <div className="mt-3 px-1 py-1"></div>
        </div>
        <div className="flex flex-wrap justify-evenly items-center gap-3 mt-10">
          <div className={cek ? "show" : ""} style={{ opacity: 0 }}>
            <img src="/aura.jpg" alt="aura" className=" w-80 h-80 m-auto border rounded-b-lg shadow-lg hover:shadow-orange-700" />
          </div>
          <div className=" p-1">
            <p>Haii Saya Aura</p>
            <p>Saya seorang developer Front-End</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

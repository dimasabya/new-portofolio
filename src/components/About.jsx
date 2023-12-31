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
    <section id="about" className="w-screen p-4 bg-blue-400 h-screen text-center  border-b-4">
      <div className="mt-[8rem]">
        <div className="flex flex-wrap justify-evenly sm:gap-3 mt-10">
          <div className={cek ? "show outline rounded-full p-2 sm:p-5" : ""} style={{ opacity: 0 }}>
            <img src="/aura.jpg" alt="aura" className=" w-40 h-40 sm:w-80 sm:h-80 m-auto rounded-full shadow-lg hover:shadow-blue-700" />
          </div>
          <div className=" p-1 text-center sm:text-start mt-14">
            <p className="font-semibold">Hi, Im</p>
            <h1 className="text-4xl font-bold">
              <span className="text-red-700">Aura</span> Alinan
            </h1>
            <p className="text-sm">Im a profesional Web Developer Our Main Good to help & Staricficed</p>
            <p className="text-sm">the Local & Global Clients Web Development solutions</p>
            <button className="p-2 mt-6 border-2 border-red-500 rounded-lg text-red-500 hover:text-red-300 hover:font-semibold hover:border-4">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

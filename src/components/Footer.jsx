import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init();

    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <section className=" bg-blue-400">
      <div className="text-center p-2">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="font-bold text-black text-4xl my-8"
        >
          Let`s Talk
        </h1>
        <div className="flex flex-row justify-center gap-4 my-8">
          <div data-aos="slide-up" data-aos-duration="1000">
            <i className="fa-brands fa-instagram text-3xl hover:scale-125"></i>
            <p>instagram</p>
          </div>
          <div data-aos="slide-up" data-aos-duration="1300">
            <i className="fa-brands fa-whatsapp text-3xl hover:scale-125"></i>
            <p>whatsapp</p>
          </div>
          <div data-aos="slide-up" data-aos-duration="1600">
            <i className="fa-brands fa-telegram text-3xl hover:scale-125"></i>
            <p>telegram</p>
          </div>
        </div>
        <h3 className="font-semibold">
          | Created by <span className="text-white underline">dimas abya</span> |
        </h3>
      </div>
    </section>
  );
};

export default Footer;

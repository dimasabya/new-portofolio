import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
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
        <h1 data-aos="zoom-in" data-aos-duration="1000" className="font-bold text-black text-4xl my-8">
          Let`s Talk
        </h1>
        <div className="flex flex-row justify-center gap-4 my-10">
          <div data-aos="slide-up" data-aos-duration="1000">
            <i>
              <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:scale-125" />
            </i>
            <p>instagram</p>
          </div>
          <div data-aos="slide-up" data-aos-duration="1300">
            <i>
              <FontAwesomeIcon icon={faWhatsapp} className="text-3xl hover:scale-125" />
            </i>
            <p>whatsapp</p>
          </div>
          <div data-aos="slide-up" data-aos-duration="1600">
            <i>
              <FontAwesomeIcon icon={faTelegram} className="text-3xl hover:scale-125" />
            </i>
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

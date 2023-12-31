const Navbar = () => {
  return (
    <section className=" w-screen p-2 bg-blue-700">
      <div className="flex flex-wrap justify-around items-center">
        <div className="p-1">
          <img src="/aura.jpg" alt="aura" className=" w-14 h-14 border rounded-full" />
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
  );
};

export default Navbar;

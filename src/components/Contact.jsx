const Contact = () => {
  return (
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
  );
};

export default Contact;

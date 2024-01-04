const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-orange-600 flex flex-col">
      <p className="p-20 lg:p-12 bg-green-400 my-8 rounded-xl text-4xl font-bold w-2/3 text-center self-center">
        Merch Shop
      </p>
      <div className="flex justify-evenly">
        <p className="font-bold text-3xl w-2/3 p-4">OBJECTS THAT INSPIRE</p>
        <button
          className="rounded-lg bg-black p-4 text-white text-4xl rounded-full w-20 h-20"
          onClick={scrollTop}
        >
          &uArr;
        </button>
      </div>

      <div className="flex p-4 my-4 justify-center">
        <div className="w-1/2 flex flex-col gap-2">
          <a href="/#">Privacy Policy</a>
          <a href="/#">Terms of Sale</a>
          <a href="/#">Contact Us</a>
        </div>
        <div className="w-1/2 flex flex-col gap-6 font-bold">
          <a href="/#">TWITTER</a>
          <a href="/#">FACEBOOK</a>
          <a href="/#">INSTAGRAM</a>
          <a href="/#">YOUTUBE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Navbar = () => {
  const navLinks = [
    {
      label: "Services",
    },
    {
      label: "doctors",
    },
    {
      label: "How i apply",
    },
    {
      label: "reviews",
    },
  ];
  return (
    <nav className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] py-5 px-10 flex justify-between cursor-p">
        {/* Logo */}
        <p className="font-bold text-3xl text-[#7CDCD5]">Logo</p>

        {/* Navlinks */}
        <div className="flex gap-2">
          {navLinks.map((list, index) => {
            return (
              <button
                key={index}
                className="py-2 px-8 capitalize cursor-pointer hover:opacity-50 transition-all duration-300 ease-out"
              >
                {list.label}
              </button>
            );
          })}
        </div>

        {/* Button */}
        <button className="py-2 px-8 capitalize text-white bg-blue-500 cursor-pointer hover:bg-transparent hover:text-blue-500 border border-blue-500 rounded-md transition-all duration-300 ease-out">
          book a meeting
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

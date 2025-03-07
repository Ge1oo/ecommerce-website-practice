import Button from "./shared-component/Button";

const Navbar = () => {
  const navLinks = [
    {
      label: "services", 
    },
    {
      label: "doctors",
    },
    {
      label: "how it works",
    },
    {
      label: "reviews",
    },
  ];
  return (
    <nav className="w-full py-5 flex justify-between">
      <p className="text-bold text-[#7CDCD5] text-3xl ">Logo</p>
      <div className="flex gap-2">
        {navLinks?.map((list, index) => {
          return (
            <button
              key={index}
              className="capitalize py-2 px-10 cursor-pointer hover:opacity-50 hover:scale-105 transition-all duration-200 ease-out"
            >
              {list.label}
            </button>
          );
        })}
      </div>

     <Button/>
    </nav>
  );
};

export default Navbar;

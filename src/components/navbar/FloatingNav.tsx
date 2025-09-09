import Typography from "../../utils/Typography";

const FloatingNav = () => {
  const navItems = [
    { name: "Home", url: "#home" },
    { name: "Works", url: "#works" },
    { name: "About Me", url: "#about" },
    { name: "What we do", url: "#services" },
  ];
  return (
    <div className="md:flex justify-center hidden">
      <div className="border border-cosmic-light-blue/30 divide-cosmic-light-blue/30 rounded-[50px] p-5 grid grid-cols-4 divide-x justify-between w-[50%] bg-black/30 backdrop-blur-md">
        {navItems.map((navLink, index) => (
          <a href={navLink.url} key={index}>
            <Typography.Text className="w-full flex justify-center">
              {navLink.name}
            </Typography.Text>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingNav;

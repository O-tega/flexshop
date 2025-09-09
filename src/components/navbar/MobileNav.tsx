import { motion } from "motion/react";

type TMenu = {
  showMenu: boolean;
  setShowMenu: (arg: boolean) => void;
};

const MobileNav: React.FC<TMenu> = ({ showMenu, setShowMenu }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  const links = [
    { name: "For Vendors", url: "/vendors" },
    { name: "For Customers", url: "/customer" },
    { name: "Threat and Risk", url: "/risk-threat" },
  ];

  console.log(showMenu);

  return (
    <div>
      {showMenu && (
        <div className=" ">
          <motion.div
            variants={backdrop}
            animate="visible"
            initial="hidden"
            exit="hidden"
            className="fixed w-full top-13 overflow-y-scroll left-0 flex items-center justify-center z-50"
          >
            <motion.div
              variants={modal}
              className=" mx-auto w-full overflow-y-scroll  bg-black/10 backdrop-blur-md  pt-[1em] rounded-md p-5 h-[50rem]"
            >
              <div className="flex justify-between"></div>
              <div className="px-5">
                <ul className={`space-y-4 w-full`}>
                  {links.map((link, i) => (
                    <div
                      key={i}
                      className=""
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <a href={link.url}>
                        <div className="flex items-center justify-center cursor-pointer border border-cosmic-light-blue/50 h-[50px] rounded-[50px] text-center text-white hover:bg-cosmic-light-blue/50 bg-cosmic-blue-dark/30">
                          <p>{link.name}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

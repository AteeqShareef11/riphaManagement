
import { BiChevronDown } from "react-icons/bi";
import React from "react";
import { motion } from "framer-motion";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { Link, useRoutes } from "react-router-dom";
import RiphaLogo from "../assets/riphalogo.png"





const Navbar = () => {
//   const router = useRoutes()
  const [isHover, toggleHover] = React.useState(false);
  const [sideShow, setSideShow] = React.useState(false);
  const [catShow, setCatShow] = React.useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const handleChangeShow = () => {
    setSideShow(false);
    setCatShow(false);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className="w-full relative flex-col">


      <div className="w-full  bg-bgColor text-white">
        <div className="md:w-[90%] w-[80%] p-2 m-auto flex items-center justify-between">
          <div className="md:w-[20%] w-[50%] items-center flex ">
            <div className="w-full" onClick={() => setSideShow(true)}>
              <GoThreeBars className="text-textColor md:hidden flex text-3xl" />
            </div>
            <a to="/">
              <div className=" w-full cursor-pointer">
                <img className="w-full" src={RiphaLogo} alt="logo" />
              </div>
            </a>
          </div>
          <div className="md:flex text-[14px] hidden items-center  md:gap-4 lg:gap-6 xl:gap-12">
            <a href="/">
              <a
                // className={
                //   router.pathname == "/"
                //     ? "text-textColor  border-b border-textColor "
                //     : "text-white navbarLink"
                // }
              >
                Home
              </a>
            </a>
            <a href="/about">
              <a
                // className={
                //   router.pathname == "/about"
                //     ? "text-textColor  border-b border-textColor "
                //     : "text-white navbarLink"
                // }
              >
                About
              </a>
            </a>
            <motion.div
            onMouseOver={()=>{
              toggleHover(true)
            }}
              className="flex relative cursor-pointer items-center group"
              onMouseLeave={()=>{ toggleHover(false)}}
            >
              <a href="/categories">
                <a
                //   className={
                //     router.pathname == "/categories"
                //       ? "text-textColor  border-b border-textColor "
                //       : "text-white navbarLink"
                //   }
                >
                  Admissions
                </a>
              </a>
              <BiChevronDown className="text-3xl group-hover:text-textColor" />
              <motion.div
                className="absolute bg-bgColor   text-white top-10 left-0 !w-48 !p-8  z-50 !flex !flex-col gap-4 "
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <a href="/categories/beds">
                  <a className="navbarLink">Latest News</a>
                </a>
                <a href="/categories/chairs">
                  <a className="navbarLink">Merit List</a>
                </a>
                <a href="/categories/cofee">
                  <a className="navbarLink">Programs Finder</a>
                </a>
                <a href="/categories/console">
                  <a className="navbarLink">Fee Structure</a>
                </a>
                <a href="/categories/couch">
                  <a className="navbarLink">List Of Programs</a>
                </a>
                <a href="/categories/dinnig">
                  <a className="navbarLink">Applay Online</a>
                </a>
                <a href="/categories/sofa">
                  <a className="navbarLink">Contact Admissions Office</a>
                </a>
              </motion.div>
            </motion.div>
            <a href="/blog">
              <a
                // className={
                //   router.pathname == "/blog"
                //     ? "text-textColor  border-b border-textColor "
                //     : "text-white navbarLink"
                // }
              >
                Colleges
              </a>
            </a>
            <a href="/fags">
              <a
                // className={
                //   router.pathname == "/fags"
                //     ? "text-textColor  border-b border-textColor "
                //     : "text-white navbarLink"
                // }
              >
                Acadamic
              </a>
            </a>
            <a href="/contact">
              <a
                // className={
                //   router.pathname == "/contact"
                //     ? "text-textColor  border-b border-textColor "
                //     : "text-white navbarLink"
                // }
              >
                Qec
              </a>
            </a>

            <a
              href="tel:+92304911096"
              className="text-white navbarLink bg-bgColor lg:px-12 md:px-6 text-[16px] hover:bg-textColor transition-all ease-out duration-500 hover:text-bgColor py-4 rounded-full"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
      {/* {sideShow ? (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="bg-white border   absolute z-20 top-0 left-0 w-[90%] h-[100vh] "
        >
          <div className=" w-[80%]  p-2 mx-auto flex  flex-col gap-8 text-bgColor">
            <div className="w-full items-center flex justify-between ">
              <Link to="/" className="w-full">
                <div
                  className=" w-full cursor-pointer"
                  onClick={handleChangeShow}
                >
                  <img className="w-full" src="/StylishLogo.png" alt="logo" />
                </div>
              </Link>
              <div
                className="w-full flex justify-end"
                onClick={handleChangeShow}
              >
                <MdClose className="text-textColor md:hidden flex text-3xl" />
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-8 text-[14px] ">
              <Link to="/">
                <a
                  onClick={handleChangeShow}
                  className={
                    router.pathname == "/"
                      ? "text-bgColor  border-b border-bgColor "
                      : "text-bgColor navbarLink"
                  }
                >
                  Home
                </a>
              </Link>
              <Link to="/about">
                <a
                  onClick={handleChangeShow}
                  className={
                    router.pathname == "/about"
                      ? "text-bgColor  border-b border-bgColor "
                      : "text-bgColor navbarLink"
                  }
                >
                  About
                </a>
              </Link>
              <div className="flex flex-col relative cursor-pointer group">
                <div className="flex justify-between items-center">
                  <Link to="/categories">
                    <a
                      onClick={handleChangeShow}
                      className={
                        router.pathname == "/categories"
                          ? "text-bgColor  border-b border-bgColor "
                          : "text-bgColor navbarLink"
                      }
                    >
                      Categories
                    </a>
                  </Link>
                  <BiChevronDown
                    className="text-3xl group-hover:text-bgColor"
                    onClick={() => setCatShow(!catShow)}
                  />
                </div>
                {catShow ? (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: -100 }}
                    transition={{ type: "spring", duration: 1.5 }}
                    className=" bg-white ml-10 p-4  text-bgColor  w-full    flex flex-col gap-4 "
                  >
                    <Link to="/categories/beds">
                      <a onClick={handleChangeShow} className="navbarLink">
                        Beds
                      </a>
                    </Link>
                    <Link to="/categories/chairs">
                      <a onClick={handleChangeShow} className="navbarLink">
                        Chairs
                      </a>
                    </Link>
                    <Link to="/categories/cofee">
                      <a onClick={handleChangeShow} className="navbarLink">
                        Cofee & Sides Table
                      </a>
                    </Link>
                    <Link to="/categories/console">
                      <a onClick={handleChangeShow} className="navbarLink">
                        Console & Mirror
                      </a>
                    </Link>
                    <Link to="/categories/couch">
                      <a onClick={handleChangeShow} className="navbarLink">
                        Couch & Dewan
                      </a>
                    </Link>
                    <Link to="/categories/dinning">
                      <a onClick={handleChangeShow} className="navbarLink">
                        Dining
                      </a>
                    </Link>
                    <Link to="/categories/sofa">
                      <a onClick={handleChangeShow} className="navbarLink">
                        Sofa & ArmChairs
                      </a>
                    </Link>
                  </motion.div>
                ) : (
                  <></>
                )}
              </div>
              <Link to="/blog">
                <a
                  onClick={handleChangeShow}
                  className={
                    router.pathname == "/blog"
                      ? "text-bgColor  border-b border-bgColor "
                      : "text-bgColor navbarLink"
                  }
                >
                  Blogs
                </a>
              </Link>
              <Link to="/fags">
                <a
                  onClick={handleChangeShow}
                  className={
                    router.pathname == "/fags"
                      ? "text-bgColor  border-b border-bgColor "
                      : "text-bgColor navbarLink"
                  }
                >
                  Fags
                </a>
              </Link>
              <Link to="/contact">
                <a
                  onClick={handleChangeShow}
                  className={
                    router.pathname == "/contact"
                      ? "text-bgColor  border-b border-bgColor "
                      : "text-bgColor navbarLink"
                  }
                >
                  Contact
                </a>
              </Link>

              <a
                to="tel:+92304911096"
                className="text-white navbarLink bg-textColor text-center text-[16px] hover:bg-bgColor transition-all ease-out duration-500 hover:text-textColor py-4 rounded-full"
              >
                Call us
              </a>
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Navbar;
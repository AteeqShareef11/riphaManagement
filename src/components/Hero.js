import Slider from "react-slick";
import Background from "../assets/uniback.jpg"
import Hero1 from "../assets/hero2.png"
import Hero2 from "../assets/hero1.jfif"



const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
  };
  return (
    <div
      className="w-full"
      style={{
        // backgroundImage:   `url(${Background})`,
        // boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7 )",
        // height: "100%",
        // width: "100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // position: "relative",
      }}
    >
      <Slider className="w-full !flex overflow-hidden" {...settings}>
        <div className="w-full ">
        <img className="w-full h-[80vh] drop-shadow-2xl" src={Hero1} alt="" />
          
        </div>
        <div className="w-full ">
        <img className="w-full h-[80vh] drop-shadow-2xl" src={Hero2} alt="" />
          
        </div>

        <div className="w-full ">
      
        <img className="w-full h-[80vh] drop-shadow-2xl" src={Hero1} alt="" />
        </div>
      </Slider>
      {/* <div

        className="w-full h-full"
      >
        <div className="flex flex-col absolute md:gap-4 gap-8 top-20 left-10 lg:left-40 text-white">
          <h5 className="text-[12px] font-light pb-2  ">WE’RE CREATIVE</h5>
          <div className="border-b w-[8%] border-textColor"></div>
          <h2 className="md:text-[48px] text-[24px]  font-bold custonFonts  ">
            We are providing you{" "}
            <span className="text-textColor">
              world of
              <br /> art
            </span>{" "}
            on a single platform <br />
            Stylish Chiniot Furniture.
          </h2>
          <p className="text-[18px] font-medium leading-8 ">
            The furniture we crafted is elegantly designed and expertly
            upholstered to give <br />
            you the heavenly comfortable experience that you deserve.
          </p>
          <Link href="/about">
            <button className="bg-textColor rounded-full md:w-1/4 w-1/2 hover:border hover:border-textColor hover:bg-transparent hover:text-textColor transition-all ease-out duration-500 text-white p-2">
              Read more
            </button>
          </Link>
        </div>
      </div> */}
      {/* <Properties /> */}
    </div>
  );
};

export default Hero;

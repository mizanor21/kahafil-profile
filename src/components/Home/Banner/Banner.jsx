import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    delay: 250,
  };
  return (
    <div>
      <div className="">
        <Slider {...settings}>
          <div>
            <div className=" relative container-fluid flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
              <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                  className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  preserveAspectRatio="none slice"
                >
                  <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
                  <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    I&apos;m Kahafil Ora
                  </h2>
                  <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae. explicabo.
                  </p>
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-blacktransition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Get started
                    </a>
                    <a
                      href="/"
                      aria-label=""
                      className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

import NavBar from "@/components/NavBar";
import Image from "next/image";
import Whatsapp from "../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import Badges from "@/components/Badges";
import AboutMidSection from "@/components/AboutMidSection";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const About = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+442086793330"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className={`flex w-full flex-col ${montserrat.className}`}>
      <NavBar />
      <MobileNavBar />
      <div className="px-14 relative ServicesHeight w-full py-20">
        <div
          className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
          style={{
            backgroundImage: "url(/aboutbg.jpeg)",
          }}
        />
        <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
          <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
            About RM Pest Control
          </h1>
          <p className="md:font-light py-1 font-normal text-gray-100 md:text-black">
            RM Pestokill provides expert residential and commercial pest control
            services. With over 10 years worth of experience in pest control
            services, we provide a specific set of solutions for every customer.
            We have an expert & proficient set of Pest Controllers for every
            requirement. Our Services cover interior and exterior pest
            eradication services for residential and commercial customers.
          </p>
          <div className="flex pt-4 text-white md:text-black gap-2 flex-col">
            <p className="flex flex-row gap-2 items-center">
              <FaCheckCircle className="md:text-green-800 text-green-500 text-xl" />
              Exceed your expectations
            </p>
            <p className="flex flex-row gap-2 items-center">
              <FaCheckCircle className="md:text-green-800 text-green-500 text-xl" />
              Professional Expert
            </p>
            <p className="flex flex-row gap-2 items-center">
              <FaCheckCircle className="md:text-green-800 text-green-500 text-xl" />
              Deliver 100% satisfaction
            </p>
            <p className="flex flex-row gap-2 items-center">
              <FaCheckCircle className="md:text-green-800 text-green-500 text-xl" />
              Premium support 24/7
            </p>
          </div>
          <div className="flex flex-row pt-6 gap-4">
            <Link href="/contact">
              <button className="border border-green-800 md:text-base text-sm py-3 px-3 md:px-3 rounded bg-white text-green-800 font-semibold">
                Get a quote
              </button>
            </Link>
            <button
              onClick={handleCall}
              className="border border-green-800 md:text-base text-sm py-3 px-3 md:px-3  rounded text-white bg-green-800 font-semibold"
            >
              020 8679 3330
            </button>
            <button>
              <Image src={Whatsapp} alt="Hello" width={45} />
            </button>
          </div>
        </div>
      </div>
      <AboutMidSection />
      <Badges />
      <Footer />
    </div>
  );
};

export default About;

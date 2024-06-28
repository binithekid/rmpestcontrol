import Image from "next/image";
import HeroImage from "../../public/pestpng.png";
import { FaCheckCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import Logo from "../../public/checkatradelogo.png";
import { IoIosStar } from "react-icons/io";

const Hero = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+442086793330"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full flex-col md:pb-0 flex-wrap md:flex-row md:bg-gradient-to-br from-white via-gray-50 md:bg-blue-300 bg-[url('/mobilebg.png')] pb-10 md:h-auto md:mt-0 justify-center bg-cover flex">
      <div
        onClick={handleCall}
        className="w-full bg-blue-900 items-center -mb-4 justify-center flex md:hidden"
      >
        <div className="flex flex-row hover:opacity-70 items-center gap-2 py-4">
          <FiPhoneCall className="font-medium text-2xl text-white" />{" "}
          <p className="font-semibold tracking-tight text-xl text-white">
            020 8679 3330
          </p>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-14 w-full md:py-0 py-20 gap-2 justify-center items-center md:items-start flex flex-col">
        <p className="md:text-2xl text-xl text-gray-600 hidden md:block">
          Welcome To
        </p>
        <div className="flex flex-row items-center">
          {/* <Image src={Logo} width={70} alt="Hero" /> */}
          <p className="md:text-4xl text-gray-800 text-2xl hidden md:block font-bold">
            RM <span className="font-normal">PESTOKILL</span>
          </p>
        </div>
        <h1 className="font-sans block md:hidden font-bold tracking-tight text-black text-4xl text-center">
          Pest Control London
        </h1>
        <p className="md:text-gray-600 text-black px-4 md:px-0 md:text-left text-center font-medium md:font-normal text-base md:text-xl">
          We offer local pest control treatments for rats, mice, bed bugs,
          cockroaches and other insects.
        </p>
        <div className="pt-4 flex md:font-normal font-medium gap-2 flex-col">
          <p className="flex flex-row text-black md:text-gray-800 md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="md:text-blue-900 text-blue-700 text-xl" />
            Swift same-day pest control in London.
          </p>
          <p className="flex flex-row text-black md:text-gray-800 md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="md:text-blue-900 text-blue-700 text-xl" />
            Certified exterminators for safe removal.
          </p>
          <p className="flex flex-row text-black md:text-gray-800 md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="md:text-blue-900 text-blue-700 text-xl" />
            Child and pet-friendly methods used.
          </p>
          <p className="flex flex-row text-black md:text-gray-800 md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="md:text-blue-900 text-blue-700 text-xl" />
            Inspection, treatment, and proofing provided.
          </p>
          <p className="flex flex-row text-black md:text-gray-800 md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="md:text-blue-900 text-blue-700 text-xl" />
            Heat Treatment for Bed Bugs Specialist.
          </p>
          <p className="flex flex-row text-black md:text-gray-800 md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="md:text-blue-900 text-blue-700 text-xl" />
            Steam Treatment for Bed Bugs Available.
          </p>
        </div>
        <div className="md:flex hidden flex-row pt-6 gap-4">
          <Link href="/contact">
            <button className="border hover:opacity-70 transition-all text-blue-900 md:text-base text-sm py-3 px-3 md:px-3 rounded bg-white border-blue-900 font-semibold">
              Get a quote
            </button>
          </Link>
          <button
            onClick={handleCall}
            className="hover:opacity-70 transition-all md:text-base text-sm py-3 px-3 md:px-3 rounded text-white bg-blue-900 font-semibold"
          >
            020 8679 3330
          </button>
          {/* <button>
            <Image
              src={Whatsapp}
              alt="Hello"
              width={40}
              className="ml-1 hover:opacity-70 transition-all"
            />
          </button> */}
        </div>
        <div className="flex flex-col md:hidden items-center justify-center pt-4 w-full">
          <Link href="/contact">
            <button className="border shadow-2xl border-white text-white uppercase font-semibold tracking-tight py-3 px-10 rounded-lg bg-gradient-to-br from-blue-900 to-blue-700">
              Get a free quote
            </button>
          </Link>
          <div className="flex flex-col mt-4 items-center">
            <Link href="https://www.checkatrade.com/trades/RMPestokillLtd/">
              <Image
                src={Logo}
                alt="Checkatrade"
                className="w-[10rem] object-cover hover:opacity-70 transition-all cursor-pointer"
              />
            </Link>
            <div className="flex -mt-1 flex-row gap-1">
              <IoIosStar className="text-yellow-300 text-xl" />
              <IoIosStar className="text-yellow-300 text-xl" />
              <IoIosStar className="text-yellow-300 text-xl" />
              <IoIosStar className="text-yellow-300 text-xl" />
              <IoIosStar className="text-yellow-300 text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex h-auto flex-col justify-between">
        <div />
        <Image src={HeroImage} alt="Hero" className="" />
      </div>
    </div>
  );
};

export default Hero;

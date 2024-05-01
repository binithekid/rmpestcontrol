import Image from "next/image";
import HeroImage from "../../public/heroright.png";
import { FaCheckCircle } from "react-icons/fa";
import Whatsapp from "../../public/WhatsApp_Logo.svg";

const Hero = () => {
  return (
    <div className="w-full px-8 md:px-14 flex-col flex-wrap md:flex-row bg-gradient-to-br from-white via-teal-50 bg-teal-100 flex">
      <div className="md:w-1/2 w-full md:py-0 py-10 gap-2 justify-center flex flex-col">
        <p className="md:text-2xl text-xl text-gray-700">Welcome To</p>
        <div className="flex flex-row items-center">
          {/* <Image src={Logo} width={70} alt="Hero" /> */}
          <p className="md:text-4xl text-3xl font-bold">RM PEST CONTROL</p>
        </div>
        <p className="md:text-2xl  text-gray-700 text-lg">
          We offer local pest control treatments for rats, mice, bed bugs,
          cockroaches and other insects.
        </p>
        <div className="flex pt-4 gap-2 flex-col">
          <p className="flex flex-row md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Swift same-day pest control in London.
          </p>
          <p className="flex flex-row gap-2  md:text-base text-sm items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Certified exterminators for safe removal.
          </p>
          <p className="flex flex-row gap-2  md:text-base text-sm items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Child- and pet-friendly methods used.
          </p>
          <p className="flex flex-row gap-2  md:text-base text-sm items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Inspection, treatment, and proofing provided.
          </p>
          <p className="flex flex-row gap-2  md:text-base text-sm items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Heat Treatment for Bed Bugs Specialist.
          </p>
          <p className="flex flex-row gap-2  md:text-base text-sm items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Steam Treatment for Bed Bugs Available.
          </p>
        </div>
        <div className="flex flex-row pt-6 gap-4">
          <button className="border border-green-800 md:text-base text-sm py-1 md:py-3 px-2 md:px-3 rounded bg-white text-green-800 font-semibold">
            Get a quote
          </button>
          <button className="border border-green-800 md:text-base text-sm py-1 md:py-3 px-2 md:px-3  rounded text-white bg-green-800 font-semibold">
            020 8679 3330
          </button>
          <button>
            <Image src={Whatsapp} alt="Hello" width={45} />
          </button>
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

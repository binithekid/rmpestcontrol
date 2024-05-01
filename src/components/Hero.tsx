import Image from "next/image";
import HeroImage from "../../public/heroright.png";
import { FaCheckCircle } from "react-icons/fa";
import Whatsapp from "../../public/WhatsApp_Logo.svg";

const Hero = () => {
  return (
    <div className="w-full px-14 flex-col flex-wrap md:flex-row bg-gradient-to-br from-white via-teal-50 bg-teal-100 flex">
      <div className="w-1/2 gap-2 justify-center flex flex-col">
        <p className="text-2xl font-light">Welcome To</p>
        <div className="flex flex-row items-center gap-2">
          {/* <Image src={Logo} width={70} alt="Hero" /> */}
          <p className="text-4xl font-bold">RM PEST CONTROL</p>
        </div>
        <p className="text-2xl font-light">
          We offer local pest control treatments for rats, mice, bed bugs,
          cockroaches and other insects.
        </p>
        <div className="flex pt-4 gap-2 flex-col">
          <p className="flex flex-row gap-2 items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Swift same-day pest control in London.
          </p>
          <p className="flex flex-row gap-2 items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Certified exterminators for safe removal.
          </p>
          <p className="flex flex-row gap-2 items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Child- and pet-friendly methods used.
          </p>
          <p className="flex flex-row gap-2 items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Inspection, treatment, and proofing provided.
          </p>
          <p className="flex flex-row gap-2 items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Heat Treatment for Bed Bugs Specialist.
          </p>
          <p className="flex flex-row gap-2 items-center">
            <FaCheckCircle className="text-green-800 text-xl" />
            Steam Treatment for Bed Bugs Available.
          </p>
        </div>
        <div className="flex flex-row pt-6 gap-4">
          <button className="border border-green-800 py-3 px-3 rounded bg-white text-green-800 font-semibold">
            Get a free quote
          </button>
          <button className="border border-green-800 py-3 px-3 rounded text-white bg-green-800 font-semibold">
            020 8679 3330
          </button>
          <button>
            <Image src={Whatsapp} alt="Hello" width={45} />
          </button>
        </div>
      </div>
      <div className="w-1/2 flex h-auto flex-col justify-between">
        <div />
        <Image src={HeroImage} alt="Hero" className="" />
      </div>
    </div>
  );
};

export default Hero;

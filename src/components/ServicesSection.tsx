import { BsFire } from "react-icons/bs";
import { MdPestControlRodent } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";
import { MdPestControl } from "react-icons/md";

const ServicesSection = () => {
  return (
    <div className="HeroHeight  w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(240, 253, 250, 0), rgba(22, 101, 52, 1)), url(/herosection.jpeg)",
        }}
      />
      <div className="absolute md:px-14 px-8 md:py-0 py-6 inset-0 items-center flex-col md:flex-row flex">
        <div className="md:w-[40%] py-10 w-full items-center md:mr-10 flex flex-col">
          <h1 className="text-white text-xl">WHAT CAN WE DO</h1>
          <h1 className="text-white mt-2 text-center text-4xl font-bold">
            HERE ARE A LIST OF SERVICES THAT WE OFFER
          </h1>
        </div>
        <div className="md:w-[60%] w-full">
          <div className="flex md:flex-row flex-col w-full gap-4">
            <div className="md:w-1/2 w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <BsFire className="text-4xl text-green-800" />
                <p className="text-xl font-semibold">Heat Treatment</p>
                <p>
                  At Pest Hub, harnessing heat&apos;s power to eradicate pests,
                  Ensuring a thorough extermination, leaving no unwelcome
                  guests.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <MdPestControl className="text-4xl text-green-800" />{" "}
                <p className="text-xl font-semibold">Pest Control</p>
                <p>
                  At Pest Hub, harnessing heat&apos;s power to eradicate pests,
                  Ensuring a thorough extermination, leaving no unwelcome
                  guests.
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row mt-4 flex-col w-full gap-4">
            <div className="md:w-1/2 w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <FaHouseChimney className="text-4xl text-green-800" />{" "}
                <p className="text-xl font-semibold">Residential Services</p>
                <p>
                  At Pest Hub, harnessing heat&apos;s power to eradicate pests,
                  Ensuring a thorough extermination, leaving no unwelcome
                  guests.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <IoBusiness className="text-4xl text-green-800" />{" "}
                <p className="text-xl font-semibold">Commercial Services</p>
                <p>
                  At Pest Hub, harnessing heat&apos;s power to eradicate pests,
                  Ensuring a thorough extermination, leaving no unwelcome
                  guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

import NavBar from "@/components/NavBar";
import Image from "next/image";
import Whatsapp from "../../public/WhatsApp_Logo.svg";
import ServicesList from "@/components/ServicesList";

const Services = () => {
  return (
    <div className="w-full flex flex-col">
      <NavBar />
      <div className="px-14 relative border-b ServicesHeight w-full py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/services.jpeg)",
          }}
        />
        <div className="absolute px-14 gap-1 w-1/2 justify-center inset-0 flex-col flex">
          <h1 className="font-display font-bold text-2xl tracking-normal text-gray-800 sm:text-4xl">
            Pest Control Services
          </h1>
          <p className="font-light">
            We specialise in comprehensive pest control services tailored for
            both residential and commercial properties. Our expertise
            encompasses everything from common household pests like ants and
            spiders to more complex infestations such as rodents and bed bugs.
            Contact us today to schedule a consultation and experience our
            commitment to professionalism, integrity, and exceptional service.
          </p>
          <div className="flex flex-row pt-2 gap-4">
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
      </div>
      <ServicesList />
    </div>
  );
};

export default Services;

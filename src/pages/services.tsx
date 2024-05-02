import NavBar from "@/components/NavBar";
import Image from "next/image";
import ServicesList from "@/components/ServicesList";
import { Montserrat } from "next/font/google";
import Whatsapp from "../../public/WhatsApp_Logo.svg";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const Services = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+442086793330"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="We offer local pest control treatments for rats, mice, bed bugs, cockroaches and other insects."
        />
        <title>Services | RM Pest Control</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/services.jpeg)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Pest Control Services
            </h1>
            <p className="md:font-light py-1 font-normal text-gray-100 md:text-black">
              We specialise in comprehensive pest control services tailored for
              both residential and commercial properties. Our expertise
              encompasses everything from common household pests like ants and
              spiders to more complex infestations such as rodents and bed bugs.
              Contact us today to schedule a consultation and experience our
              commitment to professionalism, integrity, and exceptional service.
            </p>
            <div className="flex flex-row pt-6 gap-4">
              <Link href="/contact">
                <button className="border hover:opacity-70 transition-all border-green-800 md:text-base text-sm py-3 px-3 md:px-3 rounded bg-white text-green-800 font-semibold">
                  Get a quote
                </button>
              </Link>
              <button
                onClick={handleCall}
                className="border border-green-800 hover:opacity-70 transition-all md:text-base text-sm py-3 px-3 md:px-3  rounded text-white bg-green-800 font-semibold"
              >
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
    </>
  );
};

export default Services;

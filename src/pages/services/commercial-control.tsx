<h3 className="text-[1.4rem] font-bold">Bedbug Control</h3>;
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const Commercial = () => {
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
        <title>Commercial Pest Control | RM Pest Control</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/commercialbackground.jpeg)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Commercial Pest Control Services
            </h1>
            <p className="md:font-light py-1 font-normal text-gray-100 md:text-black">
              RM Pestokill Ltd London specialises in expert Commercial Control
              solutions. Our experienced team is dedicated to swiftly and
              effectively eliminating pest infestations, tailored to your
              specific needs. Don&apos;t let pests disrupt your life any longer
              – contact us today for a consultation and take back control of
              your space.
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

        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4  flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">Commercial Pest Control</h3>
            <p className="font-light text-sm md:text-base">
              Residential Pest Control Services consists of treating your home
              both inside and outside if required to shield your home against
              its exclusive pest invaders. Our Pest Control Services are
              effective and cost efficient and you will be supported by our
              friendly and licensed service technicians who will comprehensively
              and thoroughly review your home and yard to find out potential
              issue. Then we will offer you with a totally custom-made
              prospectus to treat and remove entry points and nests of the pest.
              We deal with the entire elimination of pests and insects in line
              with affordable and custom-made resolutions
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:items-center md:justify-center">
            <ul className="font-light text-sm md:text-base flex flex-col gap-3">
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-green-800 text-xl" />{" "}
                <p>Quick Response to all Customer</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-green-800 text-xl" />{" "}
                <p>100% Success Rate</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-green-800 text-xl" />{" "}
                <p>Full Eradication of Pests</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-green-800 text-xl" />{" "}
                <p>No Residue Left Over</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-green-800 text-xl" />{" "}
                <p>Emergency Services also Available</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-green-800 text-xl" />{" "}
                <p>Safe & agency-approved methods</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-0 bg-green-800 flex justify-center items-center">
          <h1 className="md:text-3xl text-2xl text-center px-4 py-8 md:py-10 font-bold text-white">
            Get Your Pest infestation sorted today!
          </h1>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Commercial;

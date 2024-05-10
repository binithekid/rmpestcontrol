import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";
import SteamImageTwo from "../../../public/heatttreapage.jpeg";
import NavBarNew from "@/components/NavBarNew";
import HeatFAQ from "@/components/HeatFAQ";

const montserrat = Montserrat({ subsets: ["latin"] });

const Heat = () => {
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
        <title>Heat Treatment | RM Pestokill</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <NavBarNew />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/HEATBG.png)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Heat Treatment Services
            </h1>
            <p className="py-1 font-normal text-gray-100 md:text-gray-600">
              RM Pestokill’s Heat Treatment Solution stands as the singular
              method eradicating all life stages of bedbugs and other insects
              swiftly, distinguishing itself as the ultimate insect elimination
              treatment. Elevating the property’s temperature above 50°C, the
              treatment reaches the lethal temperature zone for all insects.
            </p>
            <p className="font-normal hidden md:block text-gray-100 md:text-gray-600">
              Completion duration varies between 5 to 8 hours, contingent upon
              property size. Our commitment stands strong with a 100% guarantee
              on all jobs, irrespective of the infestation severity. Our adept
              Heat Treatment specialists remain on-site, diligently monitoring
              temperatures to ensure comprehensive coverage across every corner
              of the property.
            </p>
            <div className="flex flex-row pt-6 gap-4">
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
              <button>
                <Image
                  src={Whatsapp}
                  alt="Hello"
                  width={40}
                  className="ml-1 hover:opacity-70 transition-all"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full gap-3 pb-14 bg-gray-50 md:pb-20 pt-10 md:pt-14 md:px-14 px-4 items-center justify-center flex flex-col">
          <h3 className="text-[1.4rem] text-gray-800 font-bold">
            RM Pestokill Heat Treatment
          </h3>
          <iframe
            width="70%"
            height="500"
            src="https://www.youtube.com/embed/A4OD6kCQVXo?si=e-EM8kvHzvQ_yd22"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4  flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] text-gray-800 font-bold">
              Should I do Heat Treatment?
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Many individuals opt for the conventional spray treatment due to
              its affordability. However, with larger infestations, costs can
              skyrocket as replacements for furniture and belongings become
              necessary, resulting in significant expenses. In severe cases,
              customers have had to replace wallpaper and flooring due to
              bedbugs nesting within these spaces along with their eggs.
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              RM Pestokill’s Heat Treatment presents a safer alternative,
              minimizing chemical use significantly. This method ensures the
              safety of your family, pets, or tenants by eliminating the risk of
              exposure to harmful chemicals. Unlike spray treatments that
              necessitate removing clothes from wardrobes, our Heat Treatment
              allows you to leave clothes in place, saving you time and the
              stress of relocating belongings.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:items-center md:justify-center">
            <ul className="text-gray-600 text-sm md:text-base flex flex-col gap-3">
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Bedbugs Eliminated in One Day</p>
              </li>
              <li className="md:flex hidden flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>
                  Kills all stages of Bedbugs & other insects, including eggs.
                </p>
              </li>
              <li className="flex md:hidden flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Kills all stages of Bedbugs</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Safer way of treating a pest</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Saves Money and Time</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Emergency Services also Available</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Safe & agency-approved methods</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-0 bg-blue-900 flex justify-center items-center">
          <h1 className="md:text-3xl text-2xl text-center px-4 py-8 md:py-10 font-bold text-white">
            Get Your Pest infestation sorted today!
          </h1>
        </div>

        <div className="w-full md:gap-8 gap-8 bg-gradient-to-b from-gray-200 to-white md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full hidden md:flex">
            <Image
              src={SteamImageTwo}
              alt="bed bugs"
              className="object-cover md:h-[20rem] rounded shadow-sm w-full"
            />
          </div>{" "}
          <div className="md:w-1/2 md:mb-0 mt-[3rem] md:mt-0 flex flex-col justify-center w-full">
            <h3 className="text-[1.4rem] text-gray-800 font-bold">
              What to Expect?
            </h3>
            <ul className="flex flex-col text-sm md:text-base text-gray-600 gap-2">
              <li>
                Heat treatment is the ultimate and quickest solution to insect
                eradication.
              </li>
              <li>
                Heat treatment will always include a guarantee regardless of how
                bad the issue is.
              </li>
              <li>
                Prices can start from as little as £500 and different payment
                options available!
              </li>
              <li>
                Heat treatment will save you money in the long run as you don’t
                need to get rid of furniture!
              </li>
            </ul>
          </div>
        </div>
        <HeatFAQ />
        <Footer />
      </div>
    </>
  );
};

export default Heat;

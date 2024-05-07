import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import SteamImageOne from "../../../public/SteamImage1.jpeg";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";
import SteamImageTwo from "../../../public/SteamImage2.jpeg";

const montserrat = Montserrat({ subsets: ["latin"] });

const Steam = () => {
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
        <title>Steam Treatment | RM Pestokill</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/Steambg.png)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Steam Treatment Services
            </h1>
            <p className="py-1 font-normal text-gray-100 md:text-gray-600">
              Our innovative steam treatment method harnesses the power of
              high-temperature steam to eradicate pests effectively and safely.
              By utilising specialised steam machines, we target pests in their
              hiding spots, penetrating cracks and crevices where they lurk. The
              intense heat of the steam kills pests on contact, including bed
              bugs, cockroaches, and other insects, without the need for harsh
              chemicals.
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

        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4  flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">
              What is Steam Treatment?
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Steam treatment is a method used in pest control that involves the
              application of high-temperature steam to eliminate pests such as
              bed bugs, cockroaches, and other insects. This environmentally
              friendly approach utilizes specialized steam machines that emit
              steam at temperatures high enough to kill pests on contact. During
              steam treatment, the steam is directed into cracks, crevices, and
              other hiding spots where pests may be harboring. The intense heat
              of the steam penetrates these areas, effectively exterminating
              pests without the use of chemical pesticides.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:items-center md:justify-center">
            <ul className="text-gray-600 text-sm md:text-base flex flex-col gap-3">
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Quick Response to all Customer</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>100% Success Rate</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Full Eradication of Pests</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>No Residue Left Over</p>
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
        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">Why Steam Treatment?</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Steam treatment offers a safe, effective, and eco-friendly
              solution for pest control, providing peace of mind for homeowners,
              businesses, and property managers alike. Steam treatment is
              advantageous for several reasons:
            </p>

            <ul className="flex flex-col text-sm md:text-base text-gray-600 gap-2">
              <li>
                <span className="font-semibold">Environmentally Friendly:</span>{" "}
                Steam treatment eliminates the need for chemical pesticides,
                reducing environmental impact and minimizing exposure to harmful
                substances.
              </li>
              <li>
                <span className="font-semibold"> Effective: </span> The high
                temperature of the steam ensures thorough eradication of pests,
                reaching into hard-to-reach areas where traditional methods may
                not be as effective.
              </li>
              <li>
                <span className="font-semibold">Safe: </span> Steam treatment is
                safe for use in various environments, including homes, hotels,
                hospitals, and food processing facilities. It leaves no chemical
                residues behind, making it suitable for sensitive areas.
              </li>
              <li>
                <span className="font-semibold"> Non-Destructive:</span> Unlike
                some chemical treatments that may damage surfaces or leave
                stains, steam treatment is non-destructive and gentle on
                materials.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={SteamImageOne}
              alt="Steam Image"
              className="object-cover rounded md:h-[30rem] shadow-sm w-full"
            />
          </div>
        </div>
        <div className="w-full md:gap-8 gap-8 md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full hidden md:flex">
            <Image
              src={SteamImageTwo}
              alt="bed bugs"
              className="object-cover md:h-[20rem] rounded shadow-sm w-full"
            />
          </div>{" "}
          <div className="md:w-1/2 md:mb-0 mb-[4rem] w-full">
            <h3 className="text-[1.4rem] font-bold">
              Safe Pest Control without Chemicals
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Steam treatment is non-toxic because it relies solely on the power
              of high-temperature steam to eliminate pests, without the need for
              chemical pesticides. Unlike traditional pest control methods that
              involve the application of potentially harmful chemicals, steam
              treatment uses water heated to temperatures high enough to kill
              pests on contact. Since steam is composed of water vapor, it does
              not leave behind any chemical residues that could pose health
              risks to humans or pets. Additionally, steam treatment targets
              pests directly, without dispersing potentially harmful substances
              into the air or surrounding environment. This makes it a safe and
              endly option for pest control, particularly in sensitive
              environments such as homes, hospitals, and food processing
              facilities.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Steam;

<h3 className="text-[1.4rem] font-bold">Bedbug Control</h3>;
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/Mosquito-Fogging.jpeg";
import BedBugsTwo from "../../../public/termitescard.jpeg";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const Mosquito = () => {
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
        <title>Mosquito Pest Control | RM Pestokill</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/mosquitowallpaper.jpeg)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Mosquito Pest Control Services
            </h1>
            <p className="py-1 font-normal text-gray-100 md:text-gray-600">
              RM Pestokill Ltd London specialises in expert Mosquito Control
              solutions. Our experienced team is dedicated to swiftly and
              effectively eliminating mosquito infestations, tailored to your
              specific needs. Don&apos;t let mosquitos disrupt your life any
              longer – contact us today for a consultation and take back control
              of your space.
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
            <h3 className="text-[1.4rem] font-bold">Mosquito Control</h3>
            <p className="ftext-gray-600 text-sm md:text-base">
              Mosquito free world is a movement and long term objective of
              Indian Pest control, to help all parts of nations for Mosquito
              Control. Most often it&apos;s accomplished following concept.
            </p>
            <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
              {" "}
              It is based on ecological, economic and social criteria and
              integrates multidisciplinary methodologies into pest management
              strategies that are practical and effective to protect public
              health and the environment and improve the quality of life.
            </p>
            <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
              {" "}
              Our strategies are working in concert with insecticide. These
              contain source reduction, which incorporates physical control and
              biological control. However, helpful data is anecdotal and there
              is no documented study to show that bats, purple martins, or other
              predators consume sufficient adult mosquitoes to be effective
              control agents.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:items-center md:justify-center">
            <ul className="ftext-gray-600 text-sm md:text-base flex flex-col gap-3">
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
                <p>Full Eradication of Mosquitos</p>
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
            Get Your Mosquito infestation sorted today!
          </h1>
        </div>
        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">Mosquito Fogging</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Mosquito fogging operations will have some success in killing
              adult mosquitoes in the parts that are preserved, the residents of
              Honiara and GP are cautioned that this activity alone is not
              plenty to defend everyone or prevent all dengue infections. To
              decrease and control dengue outbreaks a number of actions
              essential to be taken not only by public authorities but also by
              residents.
            </p>

            <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
              These include making assured there are no dengue mosquitoes
              breeding in your yard, such as in tyres, drums, buckets and any
              water storage containers, and that you also keep safe your family
              from mosquito bites inside and outside the house during the day
              and in the early morning and early evening. The best procedures of
              personal protection are to apply insect repellent and to wear long
              sleeves and long pants.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={BedBugsImg}
              alt="bed bugs"
              className="object-cover rounded md:h-[23rem] shadow-sm w-full"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mosquito;

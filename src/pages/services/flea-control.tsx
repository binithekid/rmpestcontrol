import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/fleapage.jpeg";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";
import NavBarNew from "@/components/NavBarNew";

const montserrat = Montserrat({ subsets: ["latin"] });

const Flea = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+442086793330";
    window.location.href = phoneNumber;
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="We offer local pest control treatments for rats, mice, bed bugs, cockroaches and other insects."
        />
        <title>Flea Pest Control | RM Pestokill</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <NavBarNew />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/FLEABG.png)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Flea Pest Control Services
            </h1>
            <p className="py-1 font-normal text-gray-100 md:text-gray-600">
              Fleas are a common problem in UK homes, especially those with
              pets. You may discover a problem with fleas even if you do not
              have pets, if previous owners of your property kept cats or dogs.
              Fleas can also be carried on other (especially hairy) animals like
              rabbits, foxes, squirrels, rats, mice and livestock such as pigs.
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
              {" "}
              Effective Flea Pest Control
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              You could be de-fleaing your cat or dog regularly and still have a
              flea infestation at home, gone out of hand. Why? There are two
              main reasons for this:
            </p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {" "}
              Flea eggs are difficult to kill – Eggs are not killed 100% by a
              standard fipronil pet treatment. They drop on the floor (your
              carpet, in between floorboards and in your pet’s bed), where they
              soon hatch. The young fleas jump back on the host – your
              unsuspecting dog or cat, despite their flea collar.
            </p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              You’re dealing with a secondary infestation – You’re unaware that
              a rodent family in your attic has brought fleas into your home.
              Often, without a professional flea treatment and comprehensive
              control, the parasites will simply thrive and keep breeding.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:items-center md:justify-center">
            <ul className="text-gray-600 text-sm md:text-base flex flex-col gap-3">
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Same-day availability & emergency flea pest control</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>100% Success Rate</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Full Eradication of Fleas</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Inspection, treatment of fleas & prevention included</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>The service is not hourly-based</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCheckCircle className="text-blue-900 text-xl" />{" "}
                <p>Child- and pet-safe flea removal methods</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-0 bg-blue-900 flex justify-center items-center">
          <h1 className="md:text-3xl text-2xl text-center px-4 py-8 md:py-10 font-bold text-white">
            Get Your Flea infestation sorted today!
          </h1>
        </div>
        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">
              What is required for effective Flea Treatment?
            </h3>
            <p className="text-base mt-2 font-semibold text-gray-800 md:text-lg">
              Make sure to take the following measures prior to the flea
              treatment:
            </p>

            <ul className="mt-2 flex flex-col gap-3 text-gray-600 text-sm md:text-base">
              <li className="flex flex-row gap-2 items-center">
                <p>Vacuum carpets, furnishings and upholstery</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <p>Empty the vacuum cleaner away from your house</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <p>
                  Don&apos;t be present on the same floor where treatment is
                  taking place.
                </p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <p>Your cat or dog should be out of the property</p>
              </li>
            </ul>

            <p className="text-base mt-4 font-semibold text-gray-800 md:text-lg">
              After the flea control:
            </p>
            <ul className="mt-2 list-disc flex flex-col gap-3 text-gray-600 text-sm md:text-base">
              <li className="flex flex-row gap-2 items-center">
                <p>
                  Wait at least two hours before returning home after the
                  service
                </p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <p>
                  Upon your return to the property, open all doors and windows.
                </p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <p>Do not vacuum or mop the treated areas for 5 days.</p>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <p>Consider repeating the flea treatment in a few weeks.</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={BedBugsImg}
              alt="bed bugs"
              className="object-cover rounded md:h-[25rem] shadow-sm w-full"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Flea;

import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/bedbugspage.webp";
import BedBugsTwo from "../../../public/bedbugs2.webp";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const BedBugs = () => {
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
        <title>Bedbug Pest Control | RM Pest Control</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/bedbugwallpaper.jpeg)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Bedbug Pest Control Services
            </h1>
            <p className="md:font-light py-1 font-normal text-gray-100 md:text-black">
              RM Pestokill Ltd London specialises in expert Bedbug Control
              solutions. Our experienced team is dedicated to swiftly and
              effectively eliminating bedbug infestations, tailored to your
              specific needs. Don&apos;t let bedbugs disrupt your life any
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
                className="border  hover:opacity-70 transition-all md:text-base text-sm py-3 px-3 md:px-3  rounded text-white bg-blue-900 font-semibold"
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
            <h3 className="text-[1.4rem] font-bold">Bedbug Control</h3>
            <p className="font-light text-sm md:text-base">
              The bedbug is a human parasite and feeds on human blood. They live
              close to its host. This pest is often not seen but felt by the
              host. Closer inspection around bedding shows signs of their
              presence. Bedbugs are usually brought into a home by clothing,
              luggage or furniture. This is usually as a result of staying in
              infested accommodation. In the past few years, Pest Control in
              London has seen a large increase in bedbug callout due to the
              increase in population in the UK.  We at RM Pestokill Ltd London
              can eradicate bedbugs Today with our unique treatment techniques
              and years of experience. Call us today to discuss the best
              treatment plan for you.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:items-center md:justify-center">
            <ul className="font-light flex text-sm md:text-base flex-col gap-3">
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
                <p>Full Eradication of bedbugs</p>
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
            Get Your Bedbug infestation sorted today!
          </h1>
        </div>
        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">Signs</h3>
            <p className="font-light text-sm md:text-base">
              The adult bedbugs are nearly 4-5 mm long. You can spot bedbugs by
              inspecting your mattress, bed frame, behind headboards, skirting
              board, clothing or soft furnishings. They can even live behind
              picture frames and curtains! They can move into different rooms,
              usually by clothing or furniture. They live in both clean and
              dirty environments and produce tiiny cream-colored eggs that are
              usually found in dark crevices. Bedbugs are most active at night
              as they are attracted by the warmth of sleeping bodies and carbon
              dioxide from the host&apos;s breath.
            </p>
            <p className="font-light text-sm md:text-base">
              {" "}
              A sweet almond smell may be noticeable if there are many bedbugs
              around. RM Pestokill London can do a full inspection and determine
              whether you have bedbugs or not. Call Us Today for a Free Quote.
              Any affected bedding or clothing should be hot washed (at 60°C).
              Tumble drying of affected linen or more delicate items has been
              shown to be just as effective. However professional treatment is
              often needed to successfully treat an infestation as it is
              extremely hard to get rid of bed bugs on your own.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">First Inspection</h3>
            <p className="font-light text-sm md:text-base">
              If you have seen evidence of bed bugs or want to help protect your
              home against bedbugs, RM Pestokill is here to help. Our team will
              inspect your home and all RM Pestokill technicians are highly
              trained and have years of experience, making them successful and
              knowledgeable in all their pest identification and treatments. We
              will conduct an inspection of your entire home including the
              furniture, bed, headboard, skirting etc.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={BedBugsImg}
              alt="bed bugs"
              className="object-cover rounded md:h-[43rem] shadow-sm w-full"
            />
          </div>
        </div>
        <div className="w-full md:gap-8 gap-8 md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full hidden md:flex">
            <Image
              src={BedBugsTwo}
              alt="bed bugs"
              className="object-cover md:h-[47rem] rounded shadow-sm w-full"
            />
          </div>{" "}
          <div className="md:w-1/2 mb-20 w-full">
            <h3 className="text-[1.4rem] font-bold">Treatment</h3>
            <p className="font-light text-sm md:text-base">
              We will recommend the best course of action. Once you are happy
              with our action plan, we will treat your property with a
              professional and effective pesticide that has a prolonged residual
              effect. Coupled with our unique treatment techniques, the bedbugs
              will be eradicated and your home will be protected for an extended
              period of time. Any present bed bugs and their eggs will perish
              very soon!
            </p>{" "}
            <p className="font-light mt-8 text-sm md:text-base">
              Preparation prior to treatment will involve clearing the floor
              area of belongings, emptying under bed storage and stripping your
              bed sheets from all beds. After this, you must be out of the
              property for at least 3 hours. Once this time has elapsed, you may
              return to your home and live life as normal again.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">Second Inspection</h3>
            <p className="font-light text-sm md:text-base">
              We will come back after a few days or 2-3 weeks to inspect your
              home and repeat the same treatment carried out in the first
              treatment to help prevent an infestation. During this visit, we
              will also check if there are any new pests. If we see something
              new or suspicious, we will investigate it.
            </p>{" "}
            <p className="font-light mt-8 text-sm md:text-base">
              If you have any questions or would like to make a booking, please
              call or email us today. We can come out the same day we call. We
              covering all of London from North, South, East and West London. We
              work 7 days a week from 9:00am – 01:30am. Call us today on 020
              8679 3330 or email us on rmpestokill@gmail.com
            </p>
            <p className="font-light mt-8 text-sm md:text-base">
              RM Pestokill London is one of the best pest control service
              providers with over 8 years experience in providing successful
              pest eradication.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BedBugs;

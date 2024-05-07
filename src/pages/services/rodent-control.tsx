import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/micecard.jpeg";
import BedBugsTwo from "../../../public/mouse2.jpeg";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import RatCard from "../../../public/ratcard1.jpeg";
import Rat2 from "../../../public/rat2.webp";
import Head from "next/head";
import NavBarNew from "@/components/NavBarNew";

const montserrat = Montserrat({ subsets: ["latin"] });

const Rodent = () => {
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
        <title>Rodent Pest Control | RM Pestokill</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <NavBarNew />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[27rem] bg-center"
            style={{
              backgroundImage: "url(/mousewallpaper.jpeg)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Rodent Pest Control Services
            </h1>
            <p className="py-1 font-normal text-gray-100 md:text-gray-600">
              RM Pestokill Ltd London specialises in expert Rodent Control
              solutions. Our experienced team is dedicated to swiftly and
              effectively eliminating rodent infestations, tailored to your
              specific needs. Don&apos;t let rodents disrupt your life any
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
                className="hover:opacity-70 transition-all md:text-base text-sm py-3 px-3 md:px-3  rounded text-white bg-blue-900 font-semibold"
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
            <h3 className="text-[1.4rem] font-bold">House Mouse Control</h3>
            <p className="text-gray-600 text-sm md:text-base">
              House mouse or Mice can enter a property by many routes and even
              some air bricks allow mice access to a building. Kitchens tend to
              be highly preferred area for mice to infest therefore is the most
              likely place that you will encounter the mice as they will be
              searching for food. Mice are a UK wide problem for most residences
              and businesses.
            </p>
            <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
              {" "}
              They are considered to be pests due to the fact that they are
              living creatures capable of transmitting deadly diseases like
              bubonic plague, leptospirosis, lymphocytic chorio-meningitis,
              rat-bite fever, salmonella, tapeworms and others. Mice can easily
              find their way into residential and commercial premises, and most
              likely to be prevalent in the areas where food is stored or near
              areas where rubbish is dumped. Their natural and constant gnawing
              habit means mice can also cause great damage to your property,
              furnishings and equipment.
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
                <p>Full Eradication of Mice & Rats</p>
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
            Get Your Mouse infestation sorted today!
          </h1>
        </div>
        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">Signs</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Mice unlike rats are usually active at night time, most common
              sign of mice infestation are Black colored 3-7mm long droppings,
              usually scattered along the paths they pass through. Also they
              leave behind dark smudge marks that may appear on walls, skirting
              and other surfaces, onto which mice brush their bodies passing
              through. They nibble on doors, skirting, walls or other surfaces.
              Noises at night time of nibbling and scratching also indicates the
              presence of the mice. An unpleasant odour caused by mice urine is
              also an indication of mice infestation.
            </p>

            <h3 className="text-[1.4rem] mt-8 font-bold">Inspection</h3>
            <p className="text-gray-600 text-sm md:text-base">
              The first step in controlling mice is to inspect feeding areas and
              exclude mice by closing entry access points. Setting mouse traps
              or place mouse bait in the detected areas. Enclose the food in
              tight fitting containers. Kitchen floors, sinks and counter tops
              need to be kept clean. We will help you by arranging our experts
              to get the best inspection done all around the house specially
              door corners,kitchen, down of your furniture&apos;s etc. It will
              prevent the infestation to get more and wide.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={BedBugsTwo}
              alt="bed bugs"
              className="object-cover rounded md:h-[32rem] shadow-sm w-full"
            />
          </div>
        </div>
        <div className="w-full md:gap-8 gap-8 md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full hidden md:flex">
            <Image
              src={BedBugsImg}
              alt="bed bugs"
              className="object-cover md:h-[25rem] rounded shadow-sm w-full"
            />
          </div>{" "}
          <div className="md:w-1/2 md:mb-0 mb-[4rem] w-full">
            <h3 className="text-[1.4rem] font-bold">Treatment</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We will recommend the best course of action. We will treat your
              property with a pest control formula that has a prolonged residual
              effect so the place will be protected for an extended period of
              time to ensure mouse extermination.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">Second Inspection</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We will come back periodically to inspect your home and help
              prevent an infestation. We will also collect and dispose of mouse
              carcasses if there are any at all. Our pest exterminator might
              even offer you some useful advice on how to prevent future mice
              infestation. RM Pestokill London is one of the best pest control
              services provider. We are experts in Mice Removal. All our
              technicians have years of training and are fully qualified. For
              advice and appointments call RM Pestokill Today. We work 7 days a
              week from 9:30am – 01:30am.Call us on 020 8679 3330 or 078 3775
              6738
            </p>
          </div>
        </div>
        <div className="px-0 bg-blue-900 flex justify-center items-center">
          <h1 className="md:text-3xl text-2xl text-center px-4 py-8 md:py-10 font-bold text-white">
            Get Your Rat infestation sorted today!
          </h1>
        </div>
        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">Rat Control</h3>
            <p className="text-gray-600text-sm md:text-base">
              Presence of rats inside the premises may lead to serious damage to
              the property as well as to the health of the people around. The
              situation gets worse when they start to breed inside the premises
              which increase their numbers altogether. Once they infest a
              property, these harmful rodents can usually be found underneath
              the kitchen units, behind bath panels, inside roof voids and sheds
              and in the kitchen garden and garden decking.
            </p>

            <h3 className="text-[1.4rem] mt-8 font-bold">Signs</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Usual signs of the rat infestation are gnawed electrical wires,
              half chewed cereals or foods, nibbled plastic or even mild steel.
              At RM Pestokill we make sure that our technicians apply humane rat
              control methods authorized by necessary bodies governed by rat
              control UK. We use techniques that are not at all harmful to
              children or pets. We usually use taper proof plastic bait boxes
              and place them at strategic points in the premises in order to
              exterminate the infestation completely.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={RatCard}
              alt="bed bugs"
              className="object-cover rounded md:h-[29rem] shadow-sm w-full"
            />
          </div>
        </div>
        <div className="w-full md:gap-8 gap-8 md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full hidden md:flex">
            <Image
              src={Rat2}
              alt="bed bugs"
              className="object-cover md:h-[38rem] rounded shadow-sm w-full"
            />
          </div>{" "}
          <div className="md:w-1/2 md:mb-0 mb-[4rem] w-full">
            <h3 className="text-[1.4rem] font-bold">Inspection</h3>
            <p className="text-gray-600 text-sm md:text-base">
              If you have seen evidence of rats or want to help protect your
              home against rats, our team will inspect your home. We will very
              carefully inspect the place for openings the rats use as entry
              points. We will look after in places like bottom of doors, Gaps in
              exterior walls, roofs, drains and sewer pipes.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">Treatment</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We will recommend the best course of action. We will treat your
              property with a pest control formula that has a prolonged residual
              effect so the place will be protected for an extended period of
              time. Our pest exterminator will seal all those rat size entry
              points. Our certified technician will initially survey the
              property to find the activity areas and the entry points. They
              will then block up the holes and apply a treatment to get rid of
              the problem the quickest way possible.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">Second Inspection</h3>
            <p className="text-gray-600 text-sm md:text-base">
              If you want we can come back periodically to inspect your home and
              help prevent an infestation. If we notice something new or
              suspicious, we will investigate on it. Our technician will offer
              you some great advice on how to protect your property from rats in
              the future. For FREE advice and appointments call RM Pestokill
              Today. We work 7 days a week from 9:30am – 01:30am.Call us on 020
              8679 3330 or 078 3775 6738
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rodent;

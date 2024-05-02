import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/bedbugspage.webp";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const BedBugs = () => {
  return (
    <div className={`flex w-full flex-col ${montserrat.className}`}>
      <NavBar />
      <div className="px-14 relative border-b ServicesHeight w-full py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/bedbugwallpaper.jpeg)",
          }}
        />
        <div className="absolute px-14 gap-1 w-1/2 justify-center inset-0 flex-col flex">
          <h1 className="font-display font-bold text-2xl tracking-normal text-gray-800 sm:text-4xl">
            Bedbug Pest Control Services
          </h1>
          <p className="font-light py-1">
            RM Pestokill Ltd London specialises in expert Bedbug Control
            solutions. Our experienced team is dedicated to swiftly and
            effectively eliminating bedbug infestations, tailored to your
            specific needs. Don&apos;t let bedbugs disrupt your life any longer
            – contact us today for a consultation and take back control of your
            space.
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

      <div className="w-full md:gap-3 gap-8 py-20 md:px-14 px-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full flex flex-col gap-2">
          <h3 className="text-[2rem] font-bold">Bedbug Control</h3>
          <p className="font-light">
            The bedbug is a human parasite and feeds on human blood. They live
            close to its host. This pest is often not seen but felt by the host.
            Closer inspection around bedding shows signs of their presence.
            Bedbugs are usually brought into a home by clothing, luggage or
            furniture. This is usually as a result of staying in infested
            accommodation. In the past few years, Pest Control in London has
            seen a large increase in bedbug callout due to the increase in
            population in the UK.  We at RM Pestokill Ltd London can eradicate
            bedbugs Today with our unique treatment techniques and years of
            experience. Call us today to discuss the best treatment plan for
            you.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex md:items-center md:justify-center">
          <ul className="font-light flex flex-col gap-3">
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
              <p>Full Eradication of bedbugs</p>
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
        <h1 className="text-3xl py-10 font-bold text-white">
          Get Your Bedbug infestation sorted today!
        </h1>
      </div>
      <div className="w-full md:gap-3 gap-8 py-20 md:px-14 px-8 flex flex-col md:flex-row ">
        <div className="md:w-1/2 w-full justify-center flex flex-col gap-2">
          <h3 className="text-[1.4rem] font-bold">Signs</h3>
          <p className="font-light">
            The adult bedbugs are nearly 4-5 mm long. You can spot bedbugs by
            inspecting your mattress, bed frame, behind headboards, skirting
            board, clothing or soft furnishings. They can even live behind
            picture frames and curtains! They can move into different rooms,
            usually by clothing or furniture. They live in both clean and dirty
            environments and produce tiiny cream-colored eggs that are usually
            found in dark crevices. Bedbugs are most active at night as they are
            attracted by the warmth of sleeping bodies and carbon dioxide from
            the host&apos;s breath.
          </p>
          <p className="font-light">
            {" "}
            A sweet almond smell may be noticeable if there are many bedbugs
            around. RM Pestokill London can do a full inspection and determine
            whether you have bedbugs or not. Call Us Today for a Free Quote. Any
            affected bedding or clothing should be hot washed (at 60°C). Tumble
            drying of affected linen or more delicate items has been shown to be
            just as effective. However professional treatment is often needed to
            successfully treat an infestation as it is extremely hard to get rid
            of bed bugs on your own.
          </p>
          <h3 className="text-[1.4rem] mt-8 font-bold">First Inspection</h3>
          <p className="font-light">
            If you have seen evidence of bed bugs or want to help protect your
            home against bedbugs, RM Pestokill is here to help. Our team will
            inspect your home and all RM Pestokill technicians are highly
            trained and have years of experience, making them successful and
            knowledgeable in all their pest identification and treatments. We
            will conduct an inspection of your entire home including the
            furniture, bed, headboard, skirting etc.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8 w-full items-center justify-center flex">
          <Image
            src={BedBugsImg}
            alt="bed bugs"
            className="object-cover rounded shadow-sm w-full md:w-[80%]"
          />
        </div>
      </div>
      <div>
        <div className="md:w-1/2 w-full items-center justify-center flex">
          <Image
            src={BedBugsImg}
            alt="bed bugs"
            className="object-cover rounded shadow-sm w-full md:w-[80%]"
          />
        </div>{" "}
        <div>
          <h3 className="text-[1.4rem] mt-8 font-bold">Treatment</h3>
          <p className="font-light">
            We will recommend the best course of action. Once you are happy with
            our action plan, we will treat your property with a professional and
            effective pesticide that has a prolonged residual effect. Coupled
            with our unique treatment techniques, the bedbugs will be eradicated
            and your home will be protected for an extended period of time. Any
            present bed bugs and their eggs will perish very soon!
          </p>{" "}
          <p className="font-light">
            Preparation prior to treatment will involve clearing the floor area
            of belongings, emptying under bed storage and stripping your bed
            sheets from all beds. After this, you must be out of the property
            for at least 3 hours. Once this time has elapsed, you may return to
            your home and live life as normal again.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BedBugs;

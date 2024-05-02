<h3 className="text-[1.4rem] font-bold">Bedbug Control</h3>;
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/wood.jpeg";
import BedBugsTwo from "../../../public/termitescard.jpeg";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const Termite = () => {
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
        <title>Termite Pest Control | RM Pest Control</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/termitewallpaper.jpeg)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Termite Pest Control Services
            </h1>
            <p className="md:font-light py-1 font-normal text-gray-100 md:text-black">
              RM Pestokill Ltd London specialises in expert Termite Control
              solutions. Our experienced team is dedicated to swiftly and
              effectively eliminating termite infestations, tailored to your
              specific needs. Don&apos;t let termites disrupt your life any
              longer – contact us today for a consultation and take back control
              of your space.
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
            <h3 className="text-[1.4rem] font-bold">Termite Control</h3>
            <p className="font-light text-sm md:text-base">
              We certainly give a termite affected household or office better
              than any other service provider because we have the best knowledge
              and highly qualified workforce in house. Along with this, we use
              the best pesticides and highly progressive infrared technology to
              finish the white ants completely. Normally known as white ants,
              termites are dangerous enough to hollow all the wooden structures
              of your house/workplace.
            </p>
            <p className="font-light mt-2 md:mt-4 text-sm md:text-base">
              {" "}
              Termite control needs excellent and visionary strategy to ensure
              that your house or workplace is safe against these destructive
              little creatures. We at, RM Pesto Kill focus on adopting latest
              technology and smartly planned procedure to finish the termites
              from root. Our smartly developed and included termite control
              solutions are well-organized enough to solve the problem fully.
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
                <p>Full Eradication of Termites</p>
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
            Get Your Termite infestation sorted today!
          </h1>
        </div>
        <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">
              Wood Borer & Beetle Treatment
            </h3>
            <p className="font-light text-sm md:text-base">
              Wood-boring beetles include several peoples of beetles whose
              larvae feed on wood and wood products. A Wood-boring beetle&apos;s
              play a significant ecological role by tunnelling through dead and
              decaying wood to aid in decomposition. Wood borers are wood
              damaging insect that invade and damage structural and furniture
              wood based on the type and moisture content of the wood.
            </p>

            <p className="font-light mt-2 md:mt-4 text-sm md:text-base">
              The quantity of damage that wood boring beetles cause depends on
              many factors. For active wood boring beetle infestation we deal
              Effective treatment using chemicals for spraying and brushing
              treatment. All wooden furniture and fixtures containing those
              attached to the wall are treated with care.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={BedBugsImg}
              alt="bed bugs"
              className="object-cover rounded md:h-[19rem] shadow-sm w-full"
            />
          </div>
        </div>
        <div className="w-full md:gap-8 gap-8 md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full hidden md:flex">
            <Image
              src={BedBugsTwo}
              alt="bed bugs"
              className="object-cover md:h-[38rem] rounded shadow-sm w-full"
            />
          </div>{" "}
          <div className="md:w-1/2 md:mb-0 mb-[4rem] w-full">
            <h3 className="text-[1.4rem] font-bold">Anti-Treatment</h3>
            <p className="font-light text-sm md:text-base">
              Anti-Treatment is to create an organic barrier to deny entry of
              termites. Termite termination processes are one of our utmost
              vital services presented to our customers. We deliver anti termite
              solutions to our customers both after the construction is complete
              and before construction is undertaken. They make beds, sofas and
              chairs risky to use as the bites caused to human beings are very
              tender and causes instant swelling of the bitten area. Termite
              Extermination processes are carried out by us by spraying valuable
              anti termite fluids on the infected parts of our house. Post
              Construction anti termite treatments is deal out by us with the
              help of chemicals and sprays, whereas in the Pre-Construction
              phase, early safety can be taken by using anti termite resources
              for construction purposes.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">
              Pre & Post Contruction Anti Termite Treatment
            </h3>
            <p className="font-light text-sm md:text-base">
              We offer pre- and post- construction anti termite treatment
              services for all types of commercial and residential properties.
              We know that every task is different but they all leave a lot of
              dust behind. Our team knows that you have invested so much time,
              money and energy in your remodeling or building your new office
              space and we are certain that you will want your final performance
              to be clean and beautiful.Treating termites before creation starts
              can assist you defend against possible claims in the future.
              Construction design for several tasks requires safety for termite
              in their finishing and several others request termite free
              environment.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Termite;

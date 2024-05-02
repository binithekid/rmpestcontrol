<h3 className="text-[1.4rem] font-bold">Bedbug Control</h3>;
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/rochescard1.png";
import BedBugsTwo from "../../../public/rochescard2.png";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const Cockroach = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+442086793330"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className={`flex w-full flex-col ${montserrat.className}`}>
      <NavBar />
      <MobileNavBar />
      <div className="px-14 relative border-b ServicesHeight w-full py-20">
        <div
          className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
          style={{
            backgroundImage: "url(/cockroachwallpaper.jpeg)",
          }}
        />
        <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
          <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
            Cockroach Pest Control Services
          </h1>
          <p className="md:font-light py-1 font-normal text-gray-100 md:text-black">
            RM Pestokill Ltd London specialises in expert Cockroach Control
            solutions. Our experienced team is dedicated to swiftly and
            effectively eliminating cockroach infestations, tailored to your
            specific needs. Don&apos;t let cockroaches disrupt your life any
            longer – contact us today for a consultation and take back control
            of your space.
          </p>
          <div className="flex flex-row pt-6 gap-4">
            <Link href="/contact">
              <button className="border border-green-800 md:text-base text-sm py-3 px-3 md:px-3 rounded bg-white text-green-800 font-semibold">
                Get a quote
              </button>
            </Link>
            <button
              onClick={handleCall}
              className="border border-green-800 md:text-base text-sm py-3 px-3 md:px-3  rounded text-white bg-green-800 font-semibold"
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
          <h3 className="text-[1.4rem] font-bold">Cockroach Control</h3>
          <p className="font-light text-sm md:text-base">
            Cockroaches are known to be a very high risk pest. Cockroaches are
            most active during the night. During the day they prefer to stay
            hidden in cracks and crevices, coming out to feed mostly at night
            time. Cockroaches are attracted to all types of food available in
            your home. They will eat anything from foods, paper, packaging,
            plastics and fabrics to animal matter.
          </p>
          <p className="font-light mt-2 md:mt-4 text-sm md:text-base">
            {" "}
            We minimise the risk of insects in the home by using non-toxic
            products, which are highly targeted at the crevices where
            cockroaches hide. Cockroach bait is either housed in a
            childproof-case or applied as a gel and contains a slow-working
            poison mixed in with an attractive food. It would also help for you
            to move yard debris away from the outside of the house. Cockroaches
            are usually nocturnal but where there is a heavy infestation you
            will often see them in the daytime. Their droppings will often be
            found wherever there is suitable food and will look similar to black
            pepper granules. A strong sour smell is often noticeable where there
            is a particularly heavy infestation and professional treatment is
            often needed to put an end to the problem.{" "}
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
              <p>Full Eradication of cockroaches</p>
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
          Get Your Cockroach infestation sorted today!
        </h1>
      </div>
      <div className="w-full md:gap-3 gap-8 py-10 md:py-20 md:px-14 px-4 flex flex-col md:flex-row ">
        <div className="md:w-1/2 w-full flex flex-col gap-2">
          <h3 className="text-[1.4rem] font-bold">Signs</h3>
          <p className="font-light text-sm md:text-base">
            Their diet often consists of grease build up, leftover food,
            rubbish, and basically anything else they they can get to. This also
            includes other dead cockroaches as well as your stored food.
            Cockroaches infest your food cupboards and they are likely to
            contaminate anything they come in to contact with. They drop eggs
            and droppings everywhere they go. A cockroach infestation produces a
            lingering and unpleasant odour that taints items they contact.
          </p>

          <h3 className="text-[1.4rem] mt-8 font-bold">Inspection</h3>
          <p className="font-light text-sm md:text-base">
            If you have seen evidence of bed bugs or want to help protect your
            home against cockroaches, our team will inspect your home. They are
            sometimes hard to find however our cockroach pest control
            specialists are professionally trained and will look all around your
            property . Our pest control technicians can also deploy traps such
            as glue boards in areas where cockroaches may travel or hide.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8 w-full flex">
          <Image
            src={BedBugsImg}
            alt="bed bugs"
            className="object-cover rounded md:h-[27rem] shadow-sm w-full"
          />
        </div>
      </div>
      <div className="w-full md:gap-8 gap-8 md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full hidden md:flex">
          <Image
            src={BedBugsTwo}
            alt="bed bugs"
            className="object-cover md:h-[23rem] rounded shadow-sm w-full"
          />
        </div>{" "}
        <div className="md:w-1/2 md:mb-0 mb-[4rem] w-full">
          <h3 className="text-[1.4rem] font-bold">Treatment</h3>
          <p className="font-light text-sm md:text-base">
            These insects are particularly difficult to exterminate so it is
            important that professionals are used immediately. We have the most
            up to date procedures to treat the problem including sprays and
            fogging and extremely effective professional food substitute gels.
            This makes the treatments extremely effective. All our field
            technicians are trained to these new methods the various surfaces
            around your property with a powerful insecticide which has a
            three-month residual effect.
          </p>
          <h3 className="text-[1.4rem] mt-8 font-bold">Second Inspection</h3>
          <p className="font-light text-sm md:text-base">
            We will come back periodically to inspect your home and help prevent
            an infestation. We will ensure that that no more cockroaches are
            left in your property. Our pest controller will even offer you some
            useful advice on how to avoid cockroach infestations in the future.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cockroach;

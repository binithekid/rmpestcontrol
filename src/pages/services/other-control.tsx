import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Whatsapp from "../../../public/WhatsApp_Logo.svg";
import { FaCheckCircle } from "react-icons/fa";
import BedBugsImg from "../../../public/beetles.png";
import BedBugsTwo from "../../../public/waspcard.png";
import BedBugsThree from "../../../public/garden-treatment.jpeg";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";
import Link from "next/link";
import Head from "next/head";
import NavBarNew from "@/components/NavBarNew";

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
        <title>Other Pest Control | RM Pest Control</title>
      </Head>
      <div className={`flex w-full flex-col ${montserrat.className}`}>
        <NavBar />
        <NavBarNew />
        <MobileNavBar />
        <div className="px-14 relative border-b ServicesHeight w-full py-20">
          <div
            className="absolute inset-0 bg-cover md:brightness-100 brightness-50 md:ml-0 -ml-[30rem] bg-center"
            style={{
              backgroundImage: "url(/otherwallpaper.jpeg)",
            }}
          />
          <div className="absolute px-4 md:px-14 gap-1 w-full md:w-1/2 justify-center inset-0 flex-col flex">
            <h1 className="font-display font-bold text-3xl tracking-normal text-white  md:text-gray-800 sm:text-4xl">
              Other Pest Control Services
            </h1>
            <p className="md:font-light py-1 font-normal text-gray-100 md:text-black">
              RM Pestokill Ltd London specialises in expert Pest Control
              solutions. Our experienced team is dedicated to swiftly and
              effectively eliminating pest infestations, tailored to your
              specific needs. Don&apos;t let pests disrupt your life any longer
              – contact us today for a consultation and take back control of
              your space.
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
            <h3 className="text-[1.4rem] font-bold">Ants</h3>
            <p className="font-light text-sm md:text-base">
              Ants are very irritating pests and live together in large numbers.
              It is estimated that there are more than 20,000 of ant species.
              They are small, black or reddish brown in color. They are
              attracted to anything sugary or oily and also get attracted to
              heated areas like boilers, kitchens, laundries, central heating
              pipes, radiators, etc.
            </p>
            <p className="font-light mt-2 md:mt-4 text-sm md:text-base">
              {" "}
              They form nests that are difficult to locate and leave a scented
              trail that once broken leave them confused and it takes them some
              time to form a new nest and prepare a new colony of larger
              participants.
            </p>
            <p className="font-light mt-2 md:mt-4 text-sm md:text-base">
              {" "}
              Garden ants can normally be eradicated by using insecticides in
              the form of dust powder or sprays directly to the nest site, but
              the case is not same for in house infestation as it is hard to
              locate their nests and trails. Professionals at RM Pestokill are
              experienced at handling such inside the premises ants infestation
              and apply environment friendly solutions to eradicate the
              infestation to the fullest extent.
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
            <h3 className="text-[1.4rem] font-bold">Food Beetles / Moths</h3>
            <p className="font-light text-sm md:text-base">
              Moths or Beetles can cause huge amount of damage to your stored
              products especially food based products.
            </p>
            <p className="font-light text-sm md:text-base">
              {" "}
              Any stock damage can be the first sign of Moths presence inside
              the premises. They usually lay their eggs within the food product
              for their newborn larvae to feed upon once hatched.
            </p>
            <p className="font-light text-sm md:text-base">
              {" "}
              Our team of experts on initial inspection looks for the hotspots
              of the insect activity within the given area to understand the
              estimate size of the infestation, identify the type of insect,
              study their breeding cycles and feeding habits, this will help us
              to formulate the best action plan to get rid of the infestation.
            </p>
            <p className="font-light text-sm md:text-base">
              {" "}
              <span className="font-semibold">Beetles:</span> Larder beetles,
              grain weevils, saw tooth grain beetle, flour beetle, biscuit
              beetle, yellow meal worm beetle and spider beetles.
            </p>
            <p className="font-light text-sm md:text-base">
              {" "}
              <span className="font-semibold">Moths:</span> Mill moth, Indian
              meal moth and the tropical warehouse moth are the most common type
              moths. There are many more insect’s which infest stored products
              but those mentioned tend to show up more regularly and appear more
              wide spread.
            </p>
            <p className="font-light text-sm md:text-base">
              {" "}
              They can be treated with different forms of insecticide and lure
              traps. Contact us for a free inspection and provide you with
              different cost effective solutions to help solve these costly
              infestations from getting worse and its recurrence in near future.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={BedBugsImg}
              alt="bed bugs"
              className="object-cover rounded md:h-[36rem] shadow-sm w-full"
            />
          </div>
        </div>
        <div className="w-full md:gap-8 gap-8 md:py-20 md:px-14 px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full hidden md:flex">
            <Image
              src={BedBugsTwo}
              alt="bed bugs"
              className="object-cover md:h-[52rem] rounded shadow-sm w-full"
            />
          </div>{" "}
          <div className="md:w-1/2 w-full">
            <h3 className="text-[1.4rem] font-bold">Fleas</h3>
            <p className="font-light text-sm md:text-base">
              Fleas are flat bodied, reddish brown in colour and 2mm long insect
              which usually harps on host’s hair namely dogs and cats. They are
              quite irritating once infest the host and may result in creating
              intermediary home for tapeworms in the host’s digestive system.
            </p>{" "}
            <p className="font-light md:mt-4 mt-2 text-sm md:text-base">
              Though cats and dogs are more prone to flea infestation, they
              sometime don’t even spare humans. Fleas when infest humans may
              cause huge amount of distress not due to their bites only but also
              due to the spikes on their legs that gives stinging sensation.
            </p>
            <p className="font-light md:mt-4 mt-2 text-sm md:text-base">
              Controlling fleas has to be thorough with pets, bedding, carpets,
              and use of contact insecticide might be required.
            </p>
            <p className="font-light md:mt-4 mt-2 text-sm md:text-base">
              {" "}
              <span className="font-semibold">Note:</span> The treatment of the
              pets are the owner’s responsibility.
            </p>
            <p className="font-light md:mt-4 mt-2 text-sm md:text-base">
              It is advisable to give us a call as soon as you notice any fleas
              around so that we may tailor a problem specific solution in order
              to get rid of the fleas and stop them from breeding further.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">Wasps</h3>
            <p className="font-light text-sm md:text-base">
              These scary summertime creatures can cause havoc to your summer
              enjoyment. Usually categorized as paper wasp, yellow jacket wasp
              or bald headed wasp, they usually build their nest under concrete
              floor, inside air vents, in roofs, in trees or even on the outside
              wall of your garden.
            </p>{" "}
            <p className="font-light mt-8 text-sm md:text-base">
              Wasp bites are quite painful and if gets access to kitchen may
              cause contamination of food as well. Therefore it is suggested
              that if you notice them buzzing around inside your premises, take
              it as the first sign of wasp infestation. We therefore suggest for
              professional pest control help.
            </p>
            <p className="font-light mt-8 text-sm md:text-base">
              RM Pestokill gets rid of the problem by injecting an insecticide
              powder into the wasp nest. It will take at least 1-2 days for the
              powder to have full effect.
            </p>
          </div>
        </div>
        <div className="w-full md:gap-3 gap-8 mb-5 py-10 md:px-14 px-4 flex flex-col-reverse md:flex-row ">
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <h3 className="text-[1.4rem] font-bold">Garden Treatment</h3>
            <p className="font-light text-sm md:text-base">
              We are providing Garden Pest Control for all Commercial and
              Industrial spaces. These services are providing with the aid of
              innovative methodology making use of quality approved chemicals
              and pesticides which are helping in eradicating pests from the
              garden. An insecticide perimeter treatment helps as a first line
              of defense around your home, stopping pests before they enter.
            </p>
            <p className="font-light text-sm md:text-base">
              {" "}
              This type of treatment offers one of the best insecticide defenses
              against outdoor pests that migrate inside for winter, including
              boulder bugs, stink bugs, and Asian lady beetles. Susceptibility
              of a garden to pests is one of the biggest problems faced by most
              of the gardeners. However there are some techniques that
              discourage their presence at the first place, yet there is
              treatment for pest control once they appear in your garden area.
            </p>
            <h3 className="text-[1.4rem] mt-8 font-bold">Black Ants Control</h3>
            <p className="font-light text-sm md:text-base">
              The black garden ant also known as the common black ant, is a real
              headache for gardeners. They nest in grassy areas and eat ripe
              fruits, especially fruits like strawberries.
            </p>{" "}
            <p className="font-light text-sm md:text-base">
              Ants may enter your house foraging for food or seek shelter.
              Understanding the activities of ants will support you with the
              recommended pest control procedures outlined here.
            </p>{" "}
            <p className="font-light text-sm md:text-base">
              They enter through the smallest openings, foraging for water or
              food. They are in examine of either sweet based food or
              protein/grease based foods. Once they find a food source, ants
              will leave a pheromone trail for other ants to follow.
            </p>{" "}
          </div>
          <div className="md:w-1/2 md:pl-8 w-full flex">
            <Image
              src={BedBugsThree}
              alt="bed bugs"
              className="object-cover rounded md:h-[44rem] shadow-sm w-full"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BedBugs;

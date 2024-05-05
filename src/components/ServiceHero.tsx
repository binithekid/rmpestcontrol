import Image from "next/image";
import Link from "next/link";
import BedBug from "../../public/bedbugcard.jpeg";
import Mouse from "../../public/mousecard.png";
import { FaChevronRight } from "react-icons/fa";
import SteamIcon from "../../public/SteamTreatIcon.jpeg";

const ServiceHero = () => {
  return (
    <div className="md:px-14 px-4 border-t border-gray-100 py-8 md:py-20 flex flex-col bg-gradient-to-b from-white bg-gray-50">
      <div className="w-full md:-mt-3 mt-8 flex items-center justify-center gap-3 flex-col">
        <h1 className="font-display text-center font-bold text-2xl tracking-normal sm:text-3xl text-gray-800">
          Your Pest Control Experts
        </h1>
        <p className="w-2/3 text-sm text-center text-gray-600">
          The presence of pests in your property can risk bringing damage and
          disease into your dwelling and can often escalate quickly to become
          infestations, which is why calling in professionals as soon as you
          spot an issue is crucial.
        </p>
      </div>
      <div className="w-full pt-6 md:pt-[2rem] flex flex-col md:flex-row gap-6 md:gap-3">
        <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
          <div>
            <Image
              src={BedBug}
              alt="card pic"
              className="object-cover h-[15rem]"
            />
            <div className="pt-4 w-full">
              <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                Bed Bugs Control
              </h2>
              <p className="text-gray-600 text-sm">
                {" "}
                Bed bugs pest control services in norbury SW16, Mitcham Bed bugs
                control, Bed bugs are usually brought into a home carried on
                clothing, or in luggage or furniture.
              </p>
            </div>
          </div>
          <Link href="/services/bedbugs-control">
            <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-blue-900">
              LEARN MORE
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
          <div>
            <Image
              src={Mouse}
              alt="card pic"
              className="object-cover h-[15rem]"
            />
            <div className="pt-4 w-full">
              <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                Mice/Rats Control
              </h2>
              <p className="text-gray-600 text-sm">
                {" "}
                Mice and Rats pest control services in norbury SW16, Mitcham
                rodent control. Mice and Rats usually enter the home through
                holes that are exposed form the outside or open pipe works
              </p>
            </div>
          </div>
          <Link href="/services/rodent-control">
            <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-blue-900">
              LEARN MORE
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
          <div>
            <Image
              src={SteamIcon}
              alt="card pic"
              className="object-cover h-[15rem]"
            />
            <div className="pt-4 w-full">
              <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                Steam Treatment
              </h2>
              <p className="text-gray-600 text-sm">
                {" "}
                We offer Steam Treatment services to deal with pests. Steam
                treatment is non-toxic because it relies solely on the power of
                high-temperature steam to eliminate pests, without the need for
                chemical pesticides.
              </p>
            </div>
          </div>
          <Link href="/services/steam-treatment">
            <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-blue-900">
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full pt-4 flex justify-between">
        <div />
        <Link href="/services">
          <div className="flex transition-all hover:opacity-70 flex-row gap-1 items-center">
            <p className="text-sm text-gray-800">See More Services</p>{" "}
            <FaChevronRight className="text-gray-700 text-sm" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceHero;

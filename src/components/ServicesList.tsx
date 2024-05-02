import Image from "next/image";
import BedBug from "../../public/bedbugcard.jpeg";
import Mouse from "../../public/mousecard.png";
import Termites from "../../public/termitescard.jpeg";
import Cockroach from "../../public/cockroachcard.jpeg";
import Mosquito from "../../public/mosquitocard.png";
import Other from "../../public/otherpestcard.png";
import Commercial from "../../public/commercialcard.png";
import Residential from "../../public/residpestcard.png";
import Footer from "./Footer";
import Link from "next/link";

const ServicesList = () => {
  return (
    <div>
      <div className="md:px-14 px-4 py-8 md:py-20 flex flex-col bg-gradient-to-b from-white via-gray-50 bg-gray-200">
        <h1 className="font-display font-bold text-xl text-center tracking-normal text-gray-800 sm:text-3xl">
          Here are a List of Pest Control Services we Offer
        </h1>
        <div className="w-full pt-6 md:pt-[3rem] flex flex-col md:flex-row gap-6 md:gap-3">
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
                <p className="font-light text-sm">
                  {" "}
                  Bed bugs pest control services in norbury SW16, Mitcham Bed
                  bugs control, Bed bugs are usually brought into a home carried
                  on clothing, or in luggage or furniture.
                </p>
              </div>
            </div>
            <Link href="/services/bedbugs-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
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
                <p className="font-light text-sm">
                  {" "}
                  Mice and Rats pest control services in norbury SW16, Mitcham
                  rodent control. Mice and Rats usually enter the home through
                  holes that are exposed form the outside or open pipe works
                </p>
              </div>
            </div>
            <Link href="/services/rodent-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
                LEARN MORE
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
            <div>
              <Image
                src={Termites}
                alt="card pic"
                className="object-cover h-[15rem]"
              />
              <div className="pt-4 w-full">
                <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                  Termite Control
                </h2>
                <p className="font-light text-sm">
                  {" "}
                  Termite pest control services in norbury SW16, Mitcham rodent
                  control. Termitess usually enter the home through holes that
                  are exposed form the outside or open pipe works.
                </p>
              </div>
            </div>
            <Link href="/services/termite-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full pt-6 md:pt-[3rem] flex flex-col md:flex-row gap-6 md:gap-3">
          <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
            <div>
              <Image
                src={Cockroach}
                alt="card pic"
                className="object-cover h-[15rem]"
              />
              <div className="pt-4 w-full">
                <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                  Cockroaches Control
                </h2>
                <p className="font-light text-sm">
                  {" "}
                  Cockroach pest control services in norbury SW16, Mitcham
                  cockroach bugs control. Cockroachs are usually brought into a
                  home carried on clothing, or in luggage or furniture.
                </p>
              </div>
            </div>
            <Link href="/services/cockroach-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
                LEARN MORE
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
            <div>
              <Image
                src={Mosquito}
                alt="card pic"
                className="object-cover h-[15rem]"
              />
              <div className="pt-4 w-full">
                <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                  Mosquito Control
                </h2>
                <p className="font-light text-sm">
                  {" "}
                  Mosquito pest control services in norbury SW16, Mitcham.
                  Mosquitos usually enter the home through holes that are
                  exposed form the outside or open pipe works
                </p>
              </div>
            </div>
            <Link href="/services/mosquito-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
                LEARN MORE
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
            <div>
              <Image
                src={Other}
                alt="card pic"
                className="object-cover h-[15rem]"
              />
              <div className="pt-4 w-full">
                <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                  Other Pest Control
                </h2>
                <p className="font-light text-sm">
                  {" "}
                  We offer a wide variety of different pest control services so
                  if you don&apos;t see the one require on this list don&apos;t
                  hesitate to give us a call
                </p>
              </div>
            </div>
            <Link href="/services/other-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <h1 className="font-display font-bold text-xl pt-10 md:pt-20 text-center tracking-normal text-gray-800 sm:text-3xl">
          Residential & Commercial Pest Control Services
        </h1>
        <div className="w-full pt-6 md:pt-[3rem] items-center justify-center flex flex-col md:flex-row gap-6 md:gap-3">
          <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
            <div>
              <Image
                src={Commercial}
                alt="card pic"
                className="object-cover h-[15rem]"
              />
              <div className="pt-4 w-full">
                <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                  Commercial Pest Control
                </h2>
                <p className="font-light text-sm">
                  {" "}
                  We offer Pest Control services for businesses and private
                  complexes. These fall under the category of Commercial Pest
                  Control services
                </p>
              </div>
            </div>
            <Link href="/services/commercial-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
                LEARN MORE
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 bg-white rounded justify-between shadow flex flex-col p-3 md:p-6">
            <div>
              <Image
                src={Residential}
                alt="card pic"
                className="object-cover h-[15rem]"
              />
              <div className="pt-4 w-full">
                <h2 className="font-display font-bold text-xl tracking-normal text-gray-800">
                  Residential Pest Control
                </h2>
                <p className="font-light text-sm">
                  {" "}
                  We offer Pest Control services for homes and residential
                  complexes. These fall under the category of Residential Pest
                  Control services
                </p>
              </div>
            </div>
            <Link href="/services/residential-control">
              <button className="mt-4 hover:opacity-70 transition-all font-display font-bold tracking-wide py-3 w-full rounded text-white bg-green-800">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesList;

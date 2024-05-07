import { useState } from "react";
import Logo from "../../public/rmlogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const NavBarNew = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="border-b w-full px-14 py-3 hidden md:flex items-center justify-between">
      <Link href="/">
        <div className="hover:opacity-60 transition-all flex -ml-1 flex-row items-center gap-2">
          <Image src={Logo} width={45} alt="Logo" />
          <p className="font-bold">
            RM <span className="font-normal">PESTOKILL</span>
          </p>
        </div>
      </Link>
      <nav>
        <div className="flex uppercase font-medium text-sm flex-row gap-10">
          <Link href="/">
            <p className="cursor-pointer transition-all hover:text-blue-600">
              Home
            </p>
          </Link>
          <div className="relative group">
            <Link href="/services">
              <button className="cursor-pointer flex flex-row items-center gap-1 uppercase transition-all hover:text-blue-600">
                Services <FaAngleDown />
              </button>
            </Link>
            <div
              className="absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
            duration-500 ease-in-out z-50 group-hover:transform min-w-max transform"
            >
              <div className="relative flex mt-3 flex-col gap-5 px-4 py-4 bg-white cursor-pointer uppercase rounded-b shadow-xl w-full">
                <Link href="/services/bedbugs-control">
                  <p className="hover:text-blue-600">Bedbugs Control</p>
                </Link>
                <Link href="/services/cockroach-control">
                  <p className="hover:text-blue-600">Cockroach Control</p>
                </Link>
                <Link href="/services/commercial-control">
                  <p className="hover:text-blue-600">Commercial Control</p>
                </Link>
                <Link href="/services/flea-control">
                  <p className="hover:text-blue-600">Flea Control</p>
                </Link>{" "}
                <Link href="/services/heat-treatment">
                  <p className="hover:text-blue-600">Heat Treatment</p>
                </Link>
                <Link href="/services/other-control">
                  <p className="hover:text-blue-600">Other Control</p>
                </Link>
                <Link href="/services/residential-control">
                  <p className="hover:text-blue-600">Residential Control</p>
                </Link>
                <Link href="/services/rodent-control">
                  <p className="hover:text-blue-600">Rodent Control</p>
                </Link>
                <Link href="/services/steam-treatment">
                  <p className="hover:text-blue-600">Steam Treatment</p>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about">
            <p className="cursor-pointer transition-all hover:text-blue-600">
              About
            </p>
          </Link>

          <Link href="/contact">
            <p className="cursor-pointer transition-all hover:text-blue-600">
              Contact
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBarNew;

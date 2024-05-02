import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "../../public/rmlogo.jpeg";
import Image from "next/image";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<any>(null);

  const handleMouseEnter = (e: any) => {
    setIsHovered(true);
    clearTimeout(timeoutRef.current);
    const rect = e.target.getBoundingClientRect();
    setPosition({ x: rect.left, y: rect.bottom });
  };

  const handleMouseLeave = () => {
    // Delay closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300); // Adjust the delay as needed
  };

  const handleDropdownEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleDropdownLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full hidden md:flex flex-col">
      <div className="w-full justify-between bg-green-800 flex py-4 flex-row">
        <div className="flex flex-row gap-8 px-14">
          <div className="flex flex-row items-center gap-2">
            <div className="p-[0.4rem] flex items-center justify-center rounded-full bg-white">
              <FaPhoneAlt className="text-green-800 text-sm" />
            </div>
            <p className="text-sm text-white">020 8679 3330</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="p-[0.4rem] flex items-center justify-center rounded-full bg-white">
              <MdEmail className="text-green-800 text-sm" />
            </div>
            <p className="text-sm text-white">info@rempestcontrol.co.uk</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 px-14">
          <div className="p-[0.4rem] flex items-center justify-center rounded-full bg-white">
            <IoLocationSharp className="text-green-800 text-sm" />
          </div>
          <p className="text-sm text-white">
            86 Huntingdon Close, Surrey, CR4 1XL
          </p>
        </div>
      </div>
      <div className="flex py-2 justify-between items-center bg-white z-[50] border h-20 flex-row">
        <Link href="/">
          <div className="px-14 hover:opacity-60 transition-all flex -ml-1 flex-row items-center gap-2 ">
            <Image src={Logo} width={50} alt="Logo" />
            <p className="font-bold">RM PEST CONTROL</p>
          </div>
        </Link>
        <div className="px-14 flex items-center z-50 flex-row gap-10">
          <Link href="/">
            <p className="cursor-pointer transition-all hover:text-green-500">
              Home
            </p>
          </Link>
          <div className="" onMouseLeave={handleMouseLeave}>
            <Link href="/services">
              <div
                onMouseEnter={handleMouseEnter}
                className="cursor-pointer transition-all hover:text-green-500"
                tabIndex={0}
                role="button"
              >
                Services
              </div>
            </Link>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  style={{ left: position.x, top: position.y }}
                  className="absolute flex-col border-b border-l border-r flex items-center text-2xl justify-center bg-white text-black pl-1 pr-3 mt-7 z-0"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <ul tabIndex={0} className="text-[13px]">
                    <Link href="/services/bedbugs-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Bedbugs Control</a>
                      </li>
                    </Link>
                    <Link href="/services/cockroach-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Cockroach Control</a>
                      </li>
                    </Link>
                    <Link href="/services/commercial-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Commercial Control</a>
                      </li>
                    </Link>
                    <Link href="/services/mosquito-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Mosquito Control</a>
                      </li>
                    </Link>
                    <Link href="/services/other-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Other Control</a>
                      </li>
                    </Link>
                    <Link href="/services/residential-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Residential Control</a>
                      </li>
                    </Link>
                    <Link href="/services/rodent-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Rodent Control</a>
                      </li>
                    </Link>
                    <Link href="/services/termite-control">
                      <li className="px-3 py-2 cursor-pointer transition-all hover:text-green-500">
                        <a>Termite Control</a>
                      </li>
                    </Link>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/about">
            <p className="cursor-pointer transition-all hover:text-green-500">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="cursor-pointer transition-all hover:text-green-500">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

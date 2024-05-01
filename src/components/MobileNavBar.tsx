import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/rmlogo.png";
import { useEffect, useState, useRef } from "react";
import { FaInstagram } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const MobileNavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSidebar]);

  return (
    <>
      <div className="md:hidden flex shadow z-50 w-full bg-white flex-col">
        <div className="py-3 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full flex py-2  ml-2 items-center justify-between"
          >
            <div className="flex flex-row gap-2 items-center">
              <Image src={Logo} alt="Logo" width={50} />
              <h2 className="text-xl font-bold">RM PEST CONTROL</h2>
            </div>
            <button onClick={() => setShowSidebar(true)} className="text-black">
              <RxHamburgerMenu className="text-2xl mr-2" />
            </button>
          </motion.div>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default MobileNavBar;

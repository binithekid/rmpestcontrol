import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

const NavBar = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+442086793330"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full hidden md:flex flex-col">
      <div className="w-full justify-between bg-blue-900 flex py-4 flex-row">
        <div className="flex flex-row gap-8 px-14">
          <div
            onClick={handleCall}
            className="flex cursor-pointer transition-all hover:opacity-70 flex-row items-center gap-2"
          >
            <div className="p-[0.4rem] flex items-center justify-center rounded-full bg-white">
              <FaPhoneAlt className="text-blue-900 text-sm" />
            </div>
            <p className="text-sm text-white">020 8679 3330</p>
          </div>
          <Link href="mailto:rmpestokill@gmail.com">
            <div className="flex cursor-pointer transition-all hover:opacity-70 flex-row items-center gap-2">
              <div className="p-[0.4rem] flex items-center justify-center rounded-full bg-white">
                <MdEmail className="text-blue-900 text-sm" />
              </div>
              <p className="text-sm text-white">rmpestokill@gmail.com</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2 px-14">
          <div className="p-[0.4rem] flex items-center justify-center rounded-full bg-white">
            <IoLocationSharp className="text-blue-900 text-sm" />
          </div>
          <p className="text-sm text-white">
            86 Huntingdon Close, Surrey, CR4 1XL
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import Logo from "../../public/checkatradelogo.png";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="w-full flex px-4 md:px-14 py-20 flex-col bg-gradient-to-br from-white via-slate-50 bg-teal-50">
      <div className="w-full items-center hidden md:flex flex-row justify-center">
        <h1 className="font-display font-bold text-2xl tracking-normal sm:text-4xl text-gray-800">
          Our Testimonials with
        </h1>
        <Image
          src={Logo}
          alt="Checkatrade"
          className="w-[16rem] -ml-2 object-cover hover:opacity-70 transition-all cursor-pointer"
        />
      </div>
      <div className="w-full items-center md:hidden flex flex-col justify-center">
        <h1 className="font-display font-bold text-2xl tracking-normal text-gray-800">
          Our Testimonials with
        </h1>
        <Image
          src={Logo}
          alt="Checkatrade"
          className="w-[16rem] -ml-2 object-cover hover:opacity-70 transition-all cursor-pointer"
        />
      </div>
      <div className="py-10 flex flex-col md:flex-row gap-3">
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow-sm rounded p-8">
          <div>
            <FaQuoteLeft className="text-green-800 my-2" />
            <p className="font-light text-sm">
              We really appreciate the pest control services you have provided
              to us for the past two years. The professionalism shown by you and
              your staff is extremely importantin the small business world. I
              look forward to my next annual inspection this year!
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Robert Maxwell</p>
            <div className="flex  mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow-sm rounded p-8">
          <div>
            <FaQuoteLeft className="text-green-800 my-2" />
            <p className="font-light text-sm">
              RM Pesto Kill Company did a quick and excellent job ridding us of
              an infestation and has kept us pest free ever since 2016. I would
              highly recommend their services to anyone or any company that
              needs it.
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Maria Robinson</p>
            <div className="flex mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between shadow-sm bg-white rounded p-8">
          <div>
            <FaQuoteLeft className="text-green-800 my-2" />
            <p className="font-light text-sm">
              Thank you so much for your outstanding service and the follow-up
              treatments making sure things were okay. Also, I appreciate you
              working around my work schedule to get the job done. I will use
              your services again in the future
            </p>
          </div>

          <div className="w-full mt-4 flex items-center justify-between">
            <p className="font-semibold">Kristina Bellis</p>
            <div className="flex flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

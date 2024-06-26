import { MdEmail } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { TbFireExtinguisher } from "react-icons/tb";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const MidSection = () => {
  return (
    <div className="w-full  bg-white flex py-20 px-4 md:px-14 flex-col">
      <div className="w-full flex items-center justify-center">
        <p className="font-display text-center font-bold text-2xl tracking-normal sm:text-3xl text-gray-800">
          Your Trusted Partner in Pest Control Excellence
        </p>
      </div>

      <div className="w-full flex pt-6 gap-8 md:gap-4 flex-col md:flex-row">
        <div className="md:w-1/4 w-full flex items-center flex-col gap-3 pt-8">
          <div className="p-[0.8rem] flex items-center w-max justify-center rounded-full bg-blue-900">
            <LuClipboardList className="text-white text-3xl" />
          </div>
          <p className="text-2xl text-gray-800 font-medium">Inspection</p>
          <p className="px-6 text-center text-sm text-gray-600">
            RM Pestokill&apos;s Experts will do a thorough assessment of your
            home or business and identify pest hideouts, level of infestation,
            and best treatment to proceed with
          </p>
        </div>
        <div className="md:w-1/4 w-full flex items-center flex-col gap-3 pt-8">
          <div className="p-[0.8rem] flex items-center w-max justify-center rounded-full bg-red-800">
            <TbFireExtinguisher className="text-white text-3xl" />
          </div>
          <p className="text-2xl text-gray-800 font-medium">Treatment</p>
          <p className="px-6 text-center text-sm text-gray-600">
            Pest can be completely eliminated from your home or business with
            our expert pest control solutions in London. Same-day and emergency
            pest control treatments are available.
          </p>
        </div>
        <div className="md:w-1/4 w-full flex items-center flex-col gap-3 pt-8">
          <div className="p-[1rem] flex items-center w-max justify-center rounded-full bg-blue-900">
            <FaMagnifyingGlass className="text-white text-2xl" />
          </div>
          <p className="text-2xl text-gray-800 font-medium">Observation</p>
          <p className="px-6 text-center text-sm text-gray-600">
            Post treatment Monitoring and follow-up are included in the pest
            control services we provide in London. This ensures no pests return
            to the scene.
          </p>
        </div>
        <div className="md:w-1/4 w-full flex items-center flex-col gap-3 pt-8">
          <div className="p-[0.8rem] flex items-center w-max justify-center rounded-full bg-red-800">
            <IoShieldCheckmarkOutline className="text-white text-3xl" />
          </div>
          <p className="text-2xl text-gray-800 font-medium">Prevention</p>
          <p className="px-6 text-center text-sm text-gray-600">
            RM Pestokill’s Experts will do a thorough assessment of your home or
            business and identify pest hideouts, level of infestation, and best
            treatment to proceed with
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidSection;

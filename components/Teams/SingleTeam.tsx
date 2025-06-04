import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTeam = ({ data }: { data: any }) => {
  const { name, role, image_url } = data;
  return (
    <div className="rounded-2xl bg-white dark:bg-blacksection p-6 shadow-none border border-gray-200 dark:border-strokedark transition-all hover:scale-[1.02] hover:border-primary duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <Image
          width={100}
          height={100}
          src={image_url}
          alt={name}
          className="rounded-full object-cover ring-2 ring-primary p-1"
        />
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>

  );
};

export default SingleTeam;

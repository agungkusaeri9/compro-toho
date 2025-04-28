import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ data }: { data: Testimonial }) => {
  const { sender_name, message, organization, image_url } = data;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {sender_name}
          </h3>
          <p>{organization}</p>
        </div>
        <Image width={60} height={50} className="" src={image_url} alt={sender_name} />
      </div>

      <p>{message}</p>
    </div>
  );
};

export default SingleTestimonial;

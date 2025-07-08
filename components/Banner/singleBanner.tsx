import Image from "next/image";

const SingleBanner = ({ data }: { data: any }) => {
    const { image_url, title, subtitle } = data;
    return (
        <div className="bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
            <Image fill className="w-full h-[400px]" src={image_url} alt={title} />
        </div>

    );
};

export default SingleBanner;

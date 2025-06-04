const FooterSocialMediaSkeleton = () => {
    return (
        <div className="flex flex-row gap-4">
            {[1, 2, 3, 4].map((index) => (
                <div key={index} className="h-[22px] w-[22px] animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
            ))}
        </div>
    );
};

export default FooterSocialMediaSkeleton; 
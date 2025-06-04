const FAQItemSkeleton = () => {
    return (
        <div className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark">
            <div className="flex items-center justify-between px-6 py-5 lg:px-9 lg:py-7.5">
                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-6 w-6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="border-t border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-7.5">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
        </div>
    );
};

export default FAQItemSkeleton; 
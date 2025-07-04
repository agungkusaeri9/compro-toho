const ArticleSkeleton = () => {
    return (
        <div className="rounded-md border border-stroke bg-white p-4 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
            {/* Image Skeleton */}
            <div className="mb-4 aspect-[97/60] w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700" />

            {/* Title Skeleton */}
            <div className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

            {/* Description Skeleton */}
            <div className="space-y-2">
                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Category and Date Skeleton */}
            <div className="mt-4 flex items-center justify-between">
                <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
        </div>
    );
};

export default ArticleSkeleton;
export const AboutSkeleton = () => {
    return (
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="animate-pulse">
                <div className="relative mx-auto hidden md:block max-w-md">
                    <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
                </div>
            </div>
            <div className="animate-pulse">
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
                </div>
            </div>
        </div>
    );
};
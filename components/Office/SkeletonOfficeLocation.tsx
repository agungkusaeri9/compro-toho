const SkeletonOfficeLocation = () => {
    return (
        <div>
            <div className="animate-pulse relative mx-auto items-center hidden md:block">
                <div className="group rounded-2xl overflow-hidden align-center items-center text-center p-6 w-full border border-slate-200 dark:border-strokedark bg-white dark:bg-blacksection">
                    <div className="flex justify-center mb-4">
                        <div className="h-[180px] w-[180px] rounded-full bg-slate-300 dark:bg-slate-700" />
                    </div>
                    <div className="h-5 w-2/3 mx-auto bg-slate-300 dark:bg-slate-700 rounded mb-3" />
                    <div className="space-y-2">
                        <div className="h-4 w-5/6 mx-auto bg-slate-300 dark:bg-slate-700 rounded" />
                        <div className="h-4 w-3/4 mx-auto bg-slate-300 dark:bg-slate-700 rounded" />
                        <div className="h-4 w-4/5 mx-auto bg-slate-300 dark:bg-slate-700 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonOfficeLocation;

const SkeletonTestimonial = () => {
    return (
        <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none animate-pulse">
            <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
                <div className="flex-1">
                    <div className="h-4 w-32 bg-slate-300 dark:bg-slate-700 mb-2 rounded" />
                    <div className="h-3 w-20 bg-slate-300 dark:bg-slate-700 rounded" />
                </div>
                <div className="w-[60px] h-[50px] bg-slate-300 dark:bg-slate-700 rounded-full" />
            </div>
            <div className="space-y-2">
                <div className="h-3 w-full bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-700 rounded" />
                <div className="h-3 w-2/3 bg-slate-300 dark:bg-slate-700 rounded" />
            </div>
        </div>
    );
};

export default SkeletonTestimonial;

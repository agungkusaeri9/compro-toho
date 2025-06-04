const SkeletonTeam = () => {
    return (
        <div className="rounded-2xl bg-white dark:bg-blacksection p-6 border border-gray-200 dark:border-strokedark animate-pulse">
            <div className="flex flex-col items-center text-center space-y-4">
                {/* Foto bulat */}
                <div className="w-[100px] h-[100px] rounded-full bg-slate-300 dark:bg-slate-700" />

                {/* Nama & Role */}
                <div className="w-3/4 h-4 bg-slate-300 dark:bg-slate-600 rounded" />
                <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded" />
            </div>
        </div>
    );
};

export default SkeletonTeam;

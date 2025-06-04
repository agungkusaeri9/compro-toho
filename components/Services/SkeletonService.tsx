import React from "react";

const SkeletonService = () => {
    return (
        <div className="relative animate-pulse">
            <div className="w-full h-64 bg-slate-300 dark:bg-slate-700 rounded-md" />

            <div className="absolute bottom-1/3 p-5 w-full">
                <div className="h-6 bg-slate-400 dark:bg-slate-600 rounded w-3/4 mx-auto mb-4" />
                <div className="h-4 bg-slate-400 dark:bg-slate-600 rounded w-2/4 mx-auto" />
            </div>
        </div>
    );
};

export default SkeletonService;

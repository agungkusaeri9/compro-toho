const Loader = () => {
    return (
        <div className="w-full  flex justify-center items-center bg-white dark:bg-black">
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 border-[5px] border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-base font-medium text-gray-600 dark:text-gray-300 animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loader;

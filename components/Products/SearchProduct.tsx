import { getArticleCategory } from "@/services/ArticleCategoryService";
import { Metadata } from "next";
import CategoryDropdown from "../BlogCategory/CategoryDropdown";

type SearchProductProps = {
    search?: string;
};

const SearchProduct = async ({ search = "" }: SearchProductProps) => {


    return (
        <form method="GET" action="/articles" className="flex justify-end">
            <div className="relative w-full">
                <input
                    type="text"
                    name="search"
                    defaultValue={search}
                    placeholder="Search Here..."
                    className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 p-5"
                    aria-label="search-icon"
                >
                    <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchProduct;

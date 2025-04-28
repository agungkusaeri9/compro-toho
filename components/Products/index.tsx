
import { Metadata } from "next";
import SectionHeader from "../Common/SectionHeader";
import { Article } from "@/types/article";
import Loader from "../Loader";
import { getArticleCategory } from "@/services/ArticleCategoryService";
import CategoryDropdown from "../BlogCategory/CategoryDropdown";
import SearchProduct from "./SearchProduct";
import ProductItem from "./ProductItem";
export async function generateMetadata(): Promise<Metadata> {
  // Ambil metadata untuk SEO jika perlu
  return {
    title: "All Articles - My Blog",
    description: "Latest articles and blog posts",
  };
}

const ProductList = async ({ isTitleHeader = true, data, search }: { isTitleHeader?: boolean, data: Article[], search?: string }) => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      {isTitleHeader && (
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Products`,
                subtitle: `Latest Product `,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
        </div>
      )}

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-10 xl:px-0">
        <div className="flex justify-end w-full mb-8">
          <div className="w-1/3">
            <SearchProduct search={search} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {!data ? (
            <div className="col-span-full">
              <Loader />
            </div>
          ) : data.length > 0 ? (
            data.map((article, key) => (
              <ProductItem data={article} key={key} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

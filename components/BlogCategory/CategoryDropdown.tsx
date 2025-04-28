"use client";

import { useState } from "react";

type CategoryDropdownProps = {
    categories: any[];
    categoryId?: number;
};

const CategoryDropdown = ({ categories, categoryId }: CategoryDropdownProps) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedCategory(value);
        window.location.href = `/articles?category_id=${value}`;
    };

    return (
        <select
            name="category_id"
            className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
            value={selectedCategory || categoryId}
            onChange={handleCategoryChange}
        >
            <option value="">Select Category</option>
            {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategoryDropdown;

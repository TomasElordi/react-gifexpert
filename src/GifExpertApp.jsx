import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        if (
            !categories.find(
                (cat) => cat.toLowerCase() === newCategory.toLowerCase()
            ) &&
            newCategory.trim().length > 1
        ) {
            setCategories((prev) => [newCategory, ...prev]);
        }
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

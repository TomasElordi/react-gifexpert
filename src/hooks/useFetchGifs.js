import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const fetchData = async () => {
        const imgs = await getGifs(category);
        setImages(imgs);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return {
        images,
        isLoading: images.length == 0,
    };
};

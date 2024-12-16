import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    console.log(isLoading);
    // const [images, setImages] = useState([]);
    // const fetchData = async () => {
    //     const imgs = await getGifs(category);
    //     setImages(imgs);
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

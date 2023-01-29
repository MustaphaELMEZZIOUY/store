import variantsProps from "./variantsProps";
import imageProps from "./imageProps";

interface categoryProps {
    description: string,
    id: string,
    name: string,
    products: {
        id: string,
        images: imageProps[]
        name: string,
        price: number
        slug: string,
        variants: variantsProps[],
    }[]
}

export default categoryProps;
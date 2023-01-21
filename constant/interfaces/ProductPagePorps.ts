import imageProps from "./imageProps";
import localizationsProps from "./localizationsProps";
import variantsProps from "./variantsProps";

interface ProductPagePorps {
    description: string,
    id: string
    images: imageProps[],
    localizations: localizationsProps[],
    name: string,
    price: number,
    slug: string,
    variants: variantsProps[]
}

export default ProductPagePorps;
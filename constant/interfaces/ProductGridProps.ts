import imageProps from "./imageProps";

interface ProductGridProps {
    id: string,
    images: imageProps[],
    name: string,
    price: number,
    slug: string
  }

export default ProductGridProps;
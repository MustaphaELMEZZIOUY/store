import ProductCard from '@/components/product-card'
import ProductGridProps from '@/interfaces/ProductGridProps'

function ProductGrid({ products }: {products: ProductGridProps[]}) {
  return (
    <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
      {products.map(ProductCard)}
    </div>
  )
}

export default ProductGrid

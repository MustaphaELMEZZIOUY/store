import getAllProducts from '@/lib/get-all-products'
import getPageData from '@/lib/get-page-data'
import ProductGrid from '@/components/product-grid'
import ProductGridProps from '@/interfaces/ProductGridProps'

function IndexPage({ products }: {products: ProductGridProps[]}) {
  return <ProductGrid products={products} />
}

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale })
  const { products } = await getAllProducts({ locale })

  return {
    props: { ...pageData, products }
  }
}

export default IndexPage

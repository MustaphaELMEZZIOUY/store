import * as React from 'react'

import getAllCategories from '@/lib/get-all-categories'
import getCategoryBySlug from '@/lib/get-category-slug'
import getPageData from '@/lib/get-page-data'
import ProductGrid from '@/components/product-grid'
import SEO from '@/components/seo'
import categoryProps from '@/interfaces/categoryProps'
import { GetStaticPaths, GetStaticProps } from 'next'

function CategoryPage({ category }: {category: categoryProps}) {


  console.log({category});

  return (
    <React.Fragment>
      <SEO title={category.name} {...category} />
      <ProductGrid products={category.products} />
    </React.Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let paths = []

  for (const locale of locales) {
    const { categories } = await getAllCategories({ locale })

    paths = [
      ...paths,
      ...categories.map((category) => ({
        params: { slug: category.slug },
        locale
      }))
    ]
  }

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const pageData = await getPageData({ locale })
  const { category } = await getCategoryBySlug({
    locale,
    slug: params.slug
  })

  return {
    props: {
      category,
      ...pageData
    }
  }
}

export default CategoryPage

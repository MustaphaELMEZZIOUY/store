import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { defaultUrl } from 'next-seo.config'

function SEO({ images, ...props }) {
  const router = useRouter()

  const SEO = {
    openGraph: {
      ...(images && {
        imagess: [
          {
            alt: props.title,
            ...images
          }
        ]
      }),
      url: defaultUrl + router.asPath,
      ...props
    },
    ...props
  }

  return <NextSeo {...SEO} />
}

export default SEO

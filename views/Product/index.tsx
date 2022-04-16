import { useRouter } from 'next/router'
import React from 'react'

const ProductPage = () => {
    const router = useRouter()

  return (
    <div>Buenas trades {router?.query.id}</div>
  )
}

export default ProductPage
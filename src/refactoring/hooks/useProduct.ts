import { useState } from "react";
import { Product } from "../../types.ts";

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (newProduct: Product) => {
    setProducts(prevProducts => {
      // 중복 상품인 경우 처리
      const isDuplicate = prevProducts.some(product => product.id === newProduct.id);
      if ( isDuplicate ) return prevProducts;

      // 상품 추가
      return [...prevProducts, newProduct];
    })
  }

  const updateProduct = (updateProduct: Product) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
      product.id === updateProduct.id ? updateProduct : product
    ));
  }

  return {
    products,
    updateProduct,
    addProduct,
  };
};

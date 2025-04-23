import { Coupon, Product } from '../../../types.ts';
import { ProductList } from '../../components/product/ProductList.tsx';
import { CartList } from '../../components/cart/CartList.tsx';
import { CouponApply } from '../../components/cart/CouponApply.tsx';
import { CartSummary } from '../../components/cart/CartSummary.tsx';
import { useCart } from '../../hooks/useCart.ts';
import { getAppliedDiscount, getMaxDiscount, getRemainingStock } from '../../models/product.ts';

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const { 
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon
  } = useCart();

  const { totalBeforeDiscount, totalAfterDiscount, totalDiscount } = calculateTotal();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
          <ProductList products={products} getRemainingStock={(product) => getRemainingStock(product, cart)} getMaxDiscount={getMaxDiscount} addToCart={addToCart}/>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
          <CartList cart={cart} getAppliedDiscount={getAppliedDiscount} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
          <CouponApply coupons={coupons} applyCoupon={applyCoupon} selectedCoupon={selectedCoupon}/>
          <CartSummary totalBeforeDiscount={totalBeforeDiscount} totalAfterDiscount={totalAfterDiscount} totalDiscount={totalDiscount}/>
        </div>
      </div>
    </div>
  );
};

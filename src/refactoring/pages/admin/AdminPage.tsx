import { AdminProductPage, ProductProps } from "./AdminProductPage.tsx";
import { AdminCouponPage, CouponProps } from "./AdminCouponPage.tsx";

export const AdminPage = ({
  products,
  onProductUpdate,
  onProductAdd,
  coupons,
  onCouponAdd,
}: CouponProps & ProductProps) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdminProductPage
          products={products}
          onProductUpdate={onProductUpdate}
          onProductAdd={onProductAdd}
        />
        <AdminCouponPage coupons={coupons} onCouponAdd={onCouponAdd} />
      </div>
    </div>
  );
};

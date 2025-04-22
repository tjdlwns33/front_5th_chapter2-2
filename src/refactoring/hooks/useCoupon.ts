import { useState } from "react";
import { Coupon } from "../../types.ts";

export const useCoupons = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

  const addCoupon = (newCoupon: Coupon) => {
    setCoupons((prevCoupons) => {
      // 중복 쿠폰인 경우 처리
      const isDuplicate = prevCoupons.some(
        (coupon) => coupon.code === newCoupon.code
      );
      if (isDuplicate) return prevCoupons;

      // 쿠폰 추가
      return [...prevCoupons, newCoupon];
    });
  };

  return { coupons, addCoupon };
};

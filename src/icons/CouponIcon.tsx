import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const CouponIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M237.845333 85.333333a21.333333 21.333333 0 0 1 13.333334 4.672L352 170.666667l100.821333-80.661334A21.333333 21.333333 0 0 1 466.154667 85.333333H1002.666667a21.333333 21.333333 0 0 1 21.333333 21.333334v810.666666a21.333333 21.333333 0 0 1-21.333333 21.333334H466.154667a21.333333 21.333333 0 0 1-13.333334-4.672L352 853.333333l-100.821333 80.661334a21.333333 21.333333 0 0 1-13.333334 4.672H21.333333a21.333333 21.333333 0 0 1-21.333333-21.333334V106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h216.512z m-29.930666 106.666667H106.666667v640h101.248L298.666667 759.392V264.597333L207.914667 192zM917.333333 192H496.085333L405.333333 264.597333v494.805334L496.085333 832H917.333333V192z"   />
  </SvgIcon>
));

export default CouponIcon;
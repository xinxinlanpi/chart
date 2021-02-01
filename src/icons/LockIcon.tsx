import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const LockIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M341.333333 384h341.333334v-64c0-94.261333-76.405333-170.666667-170.666667-170.666667s-170.666667 76.405333-170.666667 170.666667v64z m448 0h128a21.333333 21.333333 0 0 1 21.333334 21.333333v533.333334a21.333333 21.333333 0 0 1-21.333334 21.333333H106.666667a21.333333 21.333333 0 0 1-21.333334-21.333333V405.333333a21.333333 21.333333 0 0 1 21.333334-21.333333h128v-64C234.666667 166.826667 358.826667 42.666667 512 42.666667s277.333333 124.16 277.333333 277.333333v64zM192 490.666667v362.666666h640V490.666667H192z m320 256a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z"   />
  </SvgIcon>
));

export default LockIcon;
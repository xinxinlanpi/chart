import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const ServiceIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M149.333333 533.333333h256a21.333333 21.333333 0 0 1 21.333334 21.333334v384a21.333333 21.333333 0 0 1-21.333334 21.333333H64a21.333333 21.333333 0 0 1-21.333333-21.333333V512C42.666667 252.8 252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333v426.666667a21.333333 21.333333 0 0 1-21.333333 21.333333H618.666667a21.333333 21.333333 0 0 1-21.333334-21.333333V554.666667a21.333333 21.333333 0 0 1 21.333334-21.333334h256v-21.333333c0-200.298667-162.368-362.666667-362.666667-362.666667S149.333333 311.701333 149.333333 512v21.333333z m554.666667 106.666667v213.333333h170.666667V640H704z m-554.666667 0v213.333333h170.666667V640H149.333333z"   />
  </SvgIcon>
));

export default ServiceIcon;
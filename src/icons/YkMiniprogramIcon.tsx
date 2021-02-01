import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const YkMiniprogramIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M512 0c282.773333 0 512 229.226667 512 512S794.773333 1024 512 1024 0 794.773333 0 512 229.226667 0 512 0z m0 106.666667c-223.861333 0-405.333333 181.472-405.333333 405.333333s181.472 405.333333 405.333333 405.333333 405.333333-181.472 405.333333-405.333333-181.472-405.333333-405.333333-405.333333z m53.333333 503.808C565.333333 715.456 485.386667 779.2 403.52 778.666667l-3.488-0.074667-0.458667 0.021333c-81.845333 2.272-162.954667-60.341333-164.874666-164.352L234.666667 610.474667c0-81.216 44.576-141.013333 125.216-171.605334l4.128-1.536 36.693333 98.869334C358.144 551.605333 341.333333 573.642667 341.333333 610.474667c0 41.066667 27.466667 63.082667 54.229334 62.890666l1.909333-0.053333 2.464-0.106667 2.474667 0.106667c26.901333 1.194667 54.922667-19.765333 56.213333-59.936l0.042667-2.901333v-194.773334c0-106.336 79.946667-170.901333 161.813333-170.346666l3.488 0.064 0.458667-0.021334c81.845333-2.304 162.954667 61.130667 164.874666 166.485334l0.032 3.829333c0 82.272-44.576 142.837333-125.216 173.834667l-4.128 1.557333-36.693333-100.16C665.856 475.349333 682.666667 453.024 682.666667 415.712c0-41.6-27.466667-63.904-54.229334-63.712l-1.909333 0.053333-2.464 0.106667-2.474667-0.106667c-26.901333-1.216-54.922667 20.032-56.213333 60.714667l-0.042667 2.944v194.773333z"   />
  </SvgIcon>
));

export default YkMiniprogramIcon;
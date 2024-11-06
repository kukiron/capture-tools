import { ReactNode } from 'react';

import { TOOLTIP_POSITIONS } from 'lib/constatns';

type Position = (typeof TOOLTIP_POSITIONS)[number];

type Props = {
  children: ReactNode;
  text: string;
  position?: Position;
};

function Tooltip({ text, position = 'top', children }: Props) {
  return (
    <div className={`tooltip tooltip-${position} p-4`} data-tip={text}>
      {children}
    </div>
  );
}

export default Tooltip;

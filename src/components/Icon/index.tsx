import { FiX } from 'react-icons/fi';

import { IconName, ICONS_BY_NAME } from './icons-by-name';

type Props = {
  name: IconName;
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
};

function Icon({ name, ...rest }: Props) {
  const normalizedName = (name || '')
    .replace(' ', '')
    .toLowerCase() as IconName;

  const IconComponent = ICONS_BY_NAME[normalizedName] || FiX;

  return <IconComponent name={name} {...rest} />;
}

export { type IconName, ICONS_BY_NAME };
export default Icon;

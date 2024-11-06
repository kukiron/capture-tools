import { useAppDispatch } from 'hooks';
import { DEFAULT_TOAST_MESSAGE, SIDENAV_ITEMS } from 'lib/constatns';
import { showToast } from 'store/reducers/toast';

import Icon from './Icon';
import Tooltip from './Tooltip';

function SideNav() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(showToast({ message: DEFAULT_TOAST_MESSAGE }));
  };

  return (
    <ul className="menu min-h-full border-r border-r-base-300 bg-base-100 pt-20">
      {SIDENAV_ITEMS.map(({ name, icon }) => (
        <li
          key={name}
          onClick={() => name !== 'Capture tools' && handleClick()}
        >
          <span
            className={`${name === 'Capture tools' ? 'active' : ''} cursor-pointer p-0`}
          >
            <Tooltip text={name} position="right">
              <Icon name={icon} className="h-5 w-5" />
            </Tooltip>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default SideNav;

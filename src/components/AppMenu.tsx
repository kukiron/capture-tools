import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MAIN_MENU } from 'lib/constatns';
import { getAppPathName } from 'lib/common';
import Icon from './Icon';

function AppMenu() {
  const [feature, setFeature] = useState(MAIN_MENU[4].text); // Post Engagement by default

  return (
    <div className="col-span-2 hidden px-6 lg:block">
      <ul role="menu" className="menu menu-vertical rounded-box bg-base-100">
        <li role="menuitem" className="menu-title">
          Capture Tools
        </li>

        {/* ----- Main menu ----- */}
        {MAIN_MENU.map(({ text, icon }) => (
          <li key={text}>
            <Link
              to={getAppPathName(text)}
              className={text === feature ? 'active' : ''}
              onClick={() => setFeature(text)}
            >
              <Icon name={icon} className="h-4 w-4" />
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppMenu;
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { toggleTheme, selectTheme } from 'store/reducers/theme';
import {
  DEFAULT_ROUTE,
  DEFAULT_TOAST_MESSAGE,
  NAVBAR_PROFILE,
  NAVBAR_RESOURCES,
} from 'lib/constatns';
import { AppTheme } from 'store/types';
import { showToast } from 'store/reducers/toast';
import Icon from './Icon';
import { useEffect } from 'react';

function Navbar() {
  const dispatch = useAppDispatch();

  const storedTheme = useSelector(selectTheme);

  const handleToggleTheme = () => {
    const newTheme =
      storedTheme === AppTheme.light ? AppTheme.dark : AppTheme.light;
    dispatch(toggleTheme(newTheme));
  };

  const handleDisplayToast = () => {
    dispatch(showToast({ message: DEFAULT_TOAST_MESSAGE }));
  };

  // set theme on app mount from store
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', storedTheme);
  }, [storedTheme]);

  return (
    <div className="navbar fixed z-20 border-b border-b-base-300 bg-base-100">
      {/* ----- Company account logo ----- */}
      <div className="lg:px-2">
        <Link className="hidden lg:block" to={DEFAULT_ROUTE}>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://pbs.twimg.com/profile_images/1767351110228918272/3Pndc5OT_400x400.png"
                alt="Vercel company logo"
              />
            </div>
          </div>
        </Link>
      </div>

      {/* ----- Ueer account link ----- */}
      <div className="flex-1 pl-3">
        <div className="breadcrumbs text-base">
          <ul className="rounded-md border border-base-300 bg-base-100 px-2 py-[.32rem]">
            <li className="w-15 truncate md:w-auto">
              <a
                href="https://ffffidget.com//"
                target="_blank"
                rel="noreferrer"
              >
                @ffffidget
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ----- Not sure what it does ----- */}
      <div className="navbar-end hidden md:inline-flex">
        <button
          className="btn btn-circle btn-ghost hover:bg-error"
          onClick={handleDisplayToast}
        >
          <Icon name="shield" className="h-5 w-5" />
        </button>
      </div>

      {/* ----- Theme switching ----- */}
      <label className="btn btn-circle btn-ghost swap swap-rotate hidden md:inline-grid">
        <input type="checkbox" onClick={handleToggleTheme} />
        <Icon name="sun" className="swap-on h-5 w-5 fill-current" />
        <Icon name="moon" className="swap-off h-5 w-5 fill-current" />
      </label>

      {/* ----- Resources section ----- */}
      <div
        role="listbox"
        className="dropdown dropdown-end hidden md:inline-block"
      >
        <label tabIndex={0}>
          <button className="btn btn-circle btn-ghost">
            <Icon name="life-buoy" className="h-5 w-5" />
          </button>
        </label>
        {/* Resources menu */}
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          role="menu"
        >
          {NAVBAR_RESOURCES.map(({ text, link, icon }) => (
            <li key={text} role="menuitem">
              <a href={link || '#'} target="_blank" rel="noreferrer">
                <Icon name={icon} className="h-5 w-5" />
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ----- Profile section ----- */}
      <div role="listbox" className="dropdown dropdown-end">
        <label tabIndex={0}>
          <button className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/17750543?v=4"
                loading="lazy"
                alt="Profile"
              />
            </div>
          </button>
        </label>
        {/* Profile menu */}
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 w-48 rounded-box bg-base-100 p-2 shadow"
          role="menu"
        >
          {NAVBAR_PROFILE.map(({ text, icon }) => (
            <li key={text} role="menuitem" onClick={handleDisplayToast}>
              <a>
                <Icon name={icon} className="h-5 w-5" />
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

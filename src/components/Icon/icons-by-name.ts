import { BiHome } from 'react-icons/bi';

import {
  BsFiletypeJson,
  BsInfoCircle,
  BsPlugin,
  BsShieldExclamation,
  BsWallet2,
} from 'react-icons/bs';

import { FiLifeBuoy, FiLink, FiUser } from 'react-icons/fi';

import { GoCheckCircle } from 'react-icons/go';

import { IoMdBook, IoMdLogOut } from 'react-icons/io';

import {
  MdArrowDropDown,
  MdFastForward,
  MdFastRewind,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineClose,
  MdOutlinePostAdd,
  MdOutlineWbSunny,
} from 'react-icons/md';

import { PiWarningCircleBold } from 'react-icons/pi';

import { RiCloseCircleLine, RiMoonLine } from 'react-icons/ri';

import {
  TbBrandMessenger,
  TbBuildingCommunity,
  TbQrcode,
  TbSearch,
} from 'react-icons/tb';

// alphabetical order
export const ICONS_BY_NAME = {
  account: FiUser,
  'add-post': MdOutlinePostAdd,
  'arrow-right': MdKeyboardArrowRight,
  'arrow-left': MdKeyboardArrowLeft,
  book: IoMdBook,
  plugin: BsPlugin,
  'check-circle': GoCheckCircle,
  'close-circle': RiCloseCircleLine,
  close: MdOutlineClose,
  community: TbBuildingCommunity,
  dropdown: MdArrowDropDown,
  'fast-forward': MdFastForward,
  'fast-rewind': MdFastRewind,
  home: BiHome,
  'info-circle': BsInfoCircle,
  json: BsFiletypeJson,
  'life-buoy': FiLifeBuoy,
  link: FiLink,
  logout: IoMdLogOut,
  messenger: TbBrandMessenger,
  moon: RiMoonLine,
  'qr-code': TbQrcode,
  search: TbSearch,
  shield: BsShieldExclamation,
  sun: MdOutlineWbSunny,
  wallet: BsWallet2,
  'warning-circle': PiWarningCircleBold,
} as const;

export type IconName = keyof typeof ICONS_BY_NAME;

import { BiHome } from 'react-icons/bi';

import {
  BsChatText,
  BsFiletypeJson,
  BsGear,
  BsInfoCircle,
  BsPlugin,
  BsShieldExclamation,
  BsSpeedometer2,
  BsWallet2,
} from 'react-icons/bs';

import { FiLifeBuoy, FiLink, FiUser, FiUsers } from 'react-icons/fi';

import { GoCheckCircle } from 'react-icons/go';

import { ImMagicWand, ImMagnet } from 'react-icons/im';

import { IoIosMegaphone, IoMdBook, IoMdLogOut } from 'react-icons/io';

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

import { RiCloseCircleLine, RiMoonLine, RiStackLine } from 'react-icons/ri';

import {
  TbBrandMessenger,
  TbBuildingCommunity,
  TbQrcode,
  TbSearch,
} from 'react-icons/tb';

import { VscGraphLine } from 'react-icons/vsc';

// alphabetical order
export const ICONS_BY_NAME = {
  account: FiUser,
  'add-post': MdOutlinePostAdd,
  'arrow-right': MdKeyboardArrowRight,
  'arrow-left': MdKeyboardArrowLeft,
  automation: ImMagicWand,
  book: IoMdBook,
  broadcast: IoIosMegaphone,
  plugin: BsPlugin,
  chat: BsChatText,
  'check-circle': GoCheckCircle,
  'close-circle': RiCloseCircleLine,
  close: MdOutlineClose,
  community: TbBuildingCommunity,
  dashboard: BsSpeedometer2,
  dropdown: MdArrowDropDown,
  engagement: ImMagnet,
  'fast-forward': MdFastForward,
  'fast-rewind': MdFastRewind,
  gear: BsGear,
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
  stacks: RiStackLine,
  sun: MdOutlineWbSunny,
  users: FiUsers,
  graph: VscGraphLine,
  wallet: BsWallet2,
  'warning-circle': PiWarningCircleBold,
} as const;

export type IconName = keyof typeof ICONS_BY_NAME;

import PostEngagement from 'routes/PostEngagement';
import LinksLibrary from 'routes/LinksLibrary';
import CheckboxPlugin from 'routes/CheckboxPlugin';
import JsonGenerator from 'routes/JsonGenerator';
import MessengerCode from 'routes/MessengerCode';
import SendToMessenger from 'routes/SendToMessenger';

import { IconName } from 'components/Icon';

type MenuItem = {
  text: string;
  link?: string;
  icon: IconName;
};

export const DEFAULT_ROUTE = '/capture-tools/post-engagement';

export const DEFAULT_TOAST_MESSAGE = 'Feature not avaiable!';

export const COMPONENT_ROUTES: { [key: string]: () => JSX.Element } = {
  'post-engagement': PostEngagement,
  'links-library': LinksLibrary,
  'checkbox-plugin': CheckboxPlugin,
  'json-generator': JsonGenerator,
  'messenger-code': MessengerCode,
  'send-to-messenger': SendToMessenger,
};

export const ITEMS_PER_PAGE = 10;

export const MAIN_MENU: MenuItem[] = [
  {
    text: 'Links Library',
    icon: 'link',
  },
  {
    text: 'JSON Generator',
    icon: 'json',
  },
  {
    text: 'Checkbox Plugin',
    icon: 'plugin',
  },
  {
    text: 'Messenger Code',
    icon: 'qr-code',
  },
  {
    text: 'Post Engagement',
    icon: 'add-post',
  },
  {
    text: 'Send To Messenger',
    icon: 'messenger',
  },
];

export const NAVBAR_RESOURCES: MenuItem[] = [
  {
    text: 'Status',
    link: 'https://status.clepher.com/',
    icon: 'check-circle',
  },
  {
    text: 'Community',
    link: 'https://www.facebook.com/groups/clepher/',
    icon: 'community',
  },
  {
    text: 'Knowledge Base',
    link: 'https://clepher.com/support/',
    icon: 'book',
  },
];

export const NAVBAR_PROFILE: MenuItem[] = [
  { text: 'Home', icon: 'home' },
  { text: 'Billing', icon: 'wallet' },
  { text: 'Account', icon: 'account' },
  { text: 'Logout', icon: 'logout' },
];

export const SIDENAV_ITEMS: { name: string; icon: IconName }[] = [
  { name: 'Dashboard', icon: 'dashboard' },
  { name: 'Audience', icon: 'users' },
  { name: 'Chat', icon: 'chat' },
  { name: 'Capture tools', icon: 'engagement' },
  { name: 'Broadcasts', icon: 'broadcast' },
  { name: 'Automation', icon: 'automation' },
  { name: "Waht's this?", icon: 'stacks' },
  { name: 'Insights', icon: 'graph' },
  { name: 'Settings', icon: 'gear' },
];

export const TOAST_ICONS: { [key: string]: IconName } = {
  success: 'check-circle',
  error: 'close-circle',
  info: 'info-circle',
  warning: 'warning-circle',
};

export const TOAST_TYPES = ['success', 'error', 'info', 'warning'] as const;

export const TOOLTIP_POSITIONS = ['top', 'right', 'bottom', 'left'] as const;

export const POST_REACTIONS = [
  'like',
  'love',
  'haha',
  'wow',
  'sad',
  'angry',
] as const;

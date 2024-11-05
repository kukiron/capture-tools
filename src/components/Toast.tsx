import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { delay } from 'lib/common';
import { useAppDispatch } from 'hooks';
import { hideToast, selectToast } from 'store/reducers/toast';

import Icon, { IconName } from './Icon';

const TOAST_ICONS: { [key: string]: IconName } = {
  success: 'check-circle',
  error: 'close-circle',
  info: 'info-circle',
  warning: 'warning-circle',
};

function Toast() {
  const dispatch = useAppDispatch();
  const toast = useSelector(selectToast);

  const iconName = TOAST_ICONS[toast?.type || 'info'];

  useEffect(() => {
    // hide after 3 seconds
    if (toast) {
      delay(3000).then(() => {
        dispatch(hideToast());
      });
    }
  }, [toast]); // eslint-disable-line

  return toast ? (
    <div className="toast toast-end transition duration-500 ease-in-out">
      <div className={`alert alert-${toast.type || 'info'} gap-2`} role="alert">
        <Icon name={iconName} className="h-4 w-4" />
        <span>{toast.message}</span>
      </div>
    </div>
  ) : null;
}

export default Toast;

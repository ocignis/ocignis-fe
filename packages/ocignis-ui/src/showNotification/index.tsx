import { toast } from 'react-hot-toast';

import { CustomNotification } from './CustomNotification';

export type ShowNotificationParams = {
  title: string;
  type?: 'success' | 'error';
  duration?: number;
  showDuration?: boolean;
  toastDismissAll?: boolean;
  isLoading?: boolean;
};

export const showNotification = ({
  title,
  type = 'success',
  toastDismissAll,
  isLoading,
  duration = isLoading ? 99999 : 6000,
  showDuration,
}: ShowNotificationParams) => {
  if (toastDismissAll === true) {
    toast.dismiss();
  }

  toast(
    (toastInstance) => (
      <CustomNotification
        toastInstanceId={toastInstance.id}
        title={title}
        showDuration={showDuration}
        isLoading={isLoading}
      />
    ),
    {
      position: 'bottom-right',
      duration,
      style: {
        backgroundColor: type === 'success' ? '#1976D2' : '#da654c',
        borderRadius: '4px',
        padding: 0,
        margin: 0,
      },
    },
  );
};

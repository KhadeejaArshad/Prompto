// hooks/useNotificationHandler.ts
import notifee, { EventType, TriggerType } from '@notifee/react-native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeTaskByTitle } from '../../features/tasks/taskSlice';

export const useNotificationHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return notifee.onForegroundEvent(async ({ type, detail }) => {
      if (
        type === EventType.ACTION_PRESS &&
        detail.notification &&
        detail.pressAction
      ) {
        const { pressAction, notification } = detail;

        if (pressAction.id === 'done' && notification.body) {
          dispatch(removeTaskByTitle(notification.body));
          await notifee.cancelNotification(notification.id!);
        }

        if (pressAction.id === 'remind-later') {
          const newTimestamp = Date.now() + 10 * 1000;
          await notifee.createTriggerNotification(
            {
              id: notification.id,
              title: notification.title ?? 'Reminder',
              body: notification.body,
              android: {
                channelId: 'your-channel-id',
                smallIcon: 'icon',
                color: '#9c27b0',
                sound: 'bell',
                largeIcon: 'icon',
                actions: [
                  {
                    title: 'Done',
                    pressAction: { id: 'done' },
                  },
                  {
                    title: 'Remind me later',
                    pressAction: { id: 'remind-later' },
                  },
                ],
              },
            },
            {
              type: TriggerType.TIMESTAMP,
              timestamp: newTimestamp,
            },
          );
        }
      }
    });
  }, []);
};

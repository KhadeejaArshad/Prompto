import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import { Task } from '../Interfaces/interface';
import { parseTime } from '../ParseTime/paerseTime';
export async function onCreateTriggerNotification({ item }: { item: Task }) {
  await notifee.requestPermission();

  await notifee.createChannel({
    id: 'your-channel-id',
    name: 'Reminders',
    sound: 'bell',
  });

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: parseTime(item.time).getTime(),
  };

  await notifee.createTriggerNotification(
    {
      id: `task-${item.id}`,
      title: 'Reminder',
      body: item.title,
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
    trigger,
  );

  console.log('Notification scheduled for', new Date(Date.now() + 10 * 1000));
}

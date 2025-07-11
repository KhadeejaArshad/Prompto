import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import { Task } from '../Interfaces/interface';
import { parseTime } from '../ParseTime/paerseTime';
export async function onCreateTriggerNotification({ item }: { item: Task }) {

  await notifee.requestPermission();

  await notifee.createChannel({
    id: 'your-channel-id',
    name: 'Reminders',
  });

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
   timestamp: parseTime(item.time).getTime()
  };

  await notifee.createTriggerNotification(
    {
      title: 'Reminder',
      body: item.title,
      android: {
        channelId: 'your-channel-id',
      },
    },
    trigger
  );

  console.log('Notification scheduled for', new Date(Date.now() + 10 * 1000));
}
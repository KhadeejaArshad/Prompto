export const parseTime = (timeStr: string): Date => {
  const now = new Date();
  const [hourMin, period] = timeStr.toLowerCase().split(/(am|pm)/);
  let [hours, minutes] = hourMin.split(':').map(Number);

  if (period === 'pm' && hours !== 12) hours += 12;
  if (period === 'am' && hours === 12) hours = 0;

  const taskTime = new Date(now);
  taskTime.setHours(hours);
  taskTime.setMinutes(minutes);
  taskTime.setSeconds(0);

 
  
  return taskTime;
};
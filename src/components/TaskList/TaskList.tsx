import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import Text from '../../UI/Text';
import React, { useState,useEffect } from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../constants/colors';
import Feather from '@react-native-vector-icons/feather';
import { Task } from '../../utils/Interfaces/interface';
import { onCreateTriggerNotification } from '../../utils/Notification/triggerNotification';
import { ToDo } from '../../models/task';
import { parseTime } from '../../utils/ParseTime/paerseTime';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(ToDo);
  useEffect(() => {
  tasks.forEach(item => {
    onCreateTriggerNotification({ item });
  });
}, []);

  const sortedTasks = tasks
    .slice()
    .sort((a, b) => parseTime(a.time).getTime() - parseTime(b.time).getTime());
  const isPast = (time: string): boolean => {
    const now = new Date();
    const taskTime = parseTime(time);

    console.log('Now:', now.toLocaleString());
    console.log('Task Time:', taskTime.toLocaleString());

    return taskTime.getTime() <= now.getTime();
  };

  return (
    <View style={styles.tasklist}>
      <View style={styles.header}>
        <Text weight="semibold"> Task list</Text>
        <TouchableOpacity>
          <Feather name="plus-circle" color={colors.iconcolor} size={30} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={sortedTasks}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => {
          const isDone = isPast(item.time);

          return (
            <View style={styles.card}>
              <View
                style={[
                  styles.icon,
                  isDone && { backgroundColor: colors.iconcolor },
                ]}
              ></View>
              <Text>
                {item.title} by {item.time}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tasklist: {
    padding: moderateScale(20),
    backgroundColor: colors.bgdashboard,
    marginHorizontal: scale(20),
    height: verticalScale(180),
    borderRadius: moderateScale(20),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: verticalScale(6),
  },
  icon: {
    width: scale(20),
    height: scale(20),
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: moderateScale(2),
  },
});

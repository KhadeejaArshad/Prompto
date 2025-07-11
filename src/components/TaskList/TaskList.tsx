import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import Text from '../../UI/Text';
import React, { useState } from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../constants/colors';
import Feather from '@react-native-vector-icons/feather';
import { Task } from '../../utils/Interfaces/interface';
import { onCreateTriggerNotification } from '../../utils/Notification/triggerNotification';
import { ToDo } from '../../models/task';
import { parseTime } from '../../utils/ParseTime/paerseTime';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(ToDo);

  const sortedTasks = tasks
    .slice()
    .sort((a, b) => parseTime(a.time).getTime() - parseTime(b.time).getTime());

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
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => onCreateTriggerNotification({ item })}
            >
              <Feather name="square" color="black" size={30} />
            </TouchableOpacity>
            <Text>
              {item.title} by {item.time}
            </Text>
          </View>
        )}
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
  },
});

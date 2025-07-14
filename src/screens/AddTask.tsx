import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants/colors';
import Header from '../components/Header/Header';
import Text from '../UI/Text';
import TaskForm from '../components/Form/Form';
import { ToDo } from '../models/task';
import { Task } from '../utils/Interfaces/interface';

const AddTask = () => {
  const [tasks, setTasks] = useState<Task[]>(ToDo);

  const handleAddTask = (newTask: { task: string; time: string }) => {
    const newTaskObj = {
      id: (tasks.length + 1).toString(),
      title: newTask.task,
      time: newTask.time,
    };
    setTasks(prev => [...prev, newTaskObj]);
  };

  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.heading}>
        <Text weight="bold" size={22}>
          What Next On The List?
        </Text>
        <Text weight="semibold" color={colors.greyish} size={18}>
          Lets help you meet your task
        </Text>
      </View>
      <TaskForm onAddTask={handleAddTask} />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {},
});

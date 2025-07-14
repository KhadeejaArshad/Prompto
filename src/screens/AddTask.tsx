import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants/colors';
import Header from '../components/Header/Header';
import Text from '../UI/Text';
import TaskForm from '../components/Form/Form';
import { ToDo } from '../models/task';
import { Task } from '../utils/Interfaces/interface';
import { useDispatch,useSelector } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { RootState } from '../store/store';



const AddTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleAddTask = (newTask: { task: string; time: string }) => {
    dispatch(addTask({ title: newTask.task, time: newTask.time }));
  };

  return (
    <View style={styles.root}>
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

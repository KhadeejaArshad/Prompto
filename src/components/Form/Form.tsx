import React, { FC } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { colors } from '../../constants/colors';
import Button from '../Button/Button';
import { TaskFormProps,FormValues,RootStackParamList } from '../../utils/Interfaces/interface';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddTask'>;
import { useDispatch, UseDispatch } from 'react-redux';
import { addTask } from '../../features/tasks/taskSlice';
const TaskForm: FC<TaskFormProps> = ({ onAddTask }) => {
  const initialValues: FormValues = { task: '', time: '' };
 const navigation = useNavigation<NavigationProp>();
 const dispatch=useDispatch();

  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    dispatch(addTask({ title: values.task, time: values.time }));
    onAddTask(values);
    resetForm();
    navigation.navigate('Dashboard')
    
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('task')}
              onBlur={handleBlur('task')}
              value={values.task}
              placeholder="What has to be done?"
              underlineColorAndroid="transparent"
            
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('time')}
              onBlur={handleBlur('time')}
              value={values.time}
              placeholder="By What Time"
              underlineColorAndroid="transparent"
           
             
            />
          </View>
          <View>
            <Button onPress={handleSubmit}>Add to the List</Button>
          </View>
        </>
      )}
    </Formik>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  input: {
    width: scale(318),
    height: scale(56),
    backgroundColor: colors.inputgrey,
    marginVertical: verticalScale(8),
    borderRadius: moderateScale(50),
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});

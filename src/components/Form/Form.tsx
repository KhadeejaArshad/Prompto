import React, { FC,useState } from 'react';
import { TextInput, View, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from '../Button/Button';
import { TaskFormProps,FormValues,RootStackParamList } from '../../utils/Interfaces/interface';
import { useDispatch} from 'react-redux';
import { scale,verticalScale,moderateScale } from 'react-native-size-matters';
import { colors } from '../../constants/colors';
import Text from '../../UI/Text';
import Header from '../Header/Header';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddTask'>;
const TaskForm: FC<TaskFormProps> = ({ onAddTask }) => {
  const initialValues: FormValues = { task: '', time: '' };
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const showTimePicker = () => setTimePickerVisible(true);
  const hideTimePicker = () => setTimePickerVisible(false);

const handleConfirm = (date: Date, setFieldValue: (field: string, value: any) => void) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

  setSelectedTime(formattedTime);
  setFieldValue('time', formattedTime);
  hideTimePicker();
};


  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    onAddTask(values);
    resetForm();
    navigation.navigate('Dashboard');
  };

  return (
<Formik initialValues={initialValues} onSubmit={handleSubmit}>
  {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
    <View style={styles.root}>
       <Header />
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text weight="bold" size={22}>
            What Next On The List?
          </Text>
          <Text weight="semibold" color={colors.greyish} size={18}>
            Let’s help you meet your task
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('task')}
            onBlur={handleBlur('task')}
            value={values.task}
            placeholder="What has to be done?"
            underlineColorAndroid='rgba(0, 0, 0, 0)'
          />

          <TouchableOpacity onPress={showTimePicker}>
            <TextInput
              style={styles.input}
              value={values.time}
              placeholder="By What Time"
              editable={false}
              pointerEvents="none"
              underlineColorAndroid='rgba(0, 0, 0, 0)'
            />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={(date) => handleConfirm(date, setFieldValue)}
            onCancel={hideTimePicker}
          />
        </View>
      </View>

 
      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit}>Add to the List</Button>
      </View>
    </View>
  )}
</Formik>


  );
};

export default TaskForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(30),
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: verticalScale(20),
    alignItems: 'center',
  },
  form: {
    alignItems: 'center',
  },
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
  buttonContainer: {
    alignItems: 'center',
  },
});




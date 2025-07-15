import { StyleSheet, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import Header from '../components/Header/Header';
import { Formik } from 'formik';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import Text from '../UI/Text';
import Button from '../components/Button/Button';
import { useSignUpMutation } from '../service/authData';

import * as Yup from 'yup';




const registrationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const Registration = ({ navigation }: any) => {
    const [signUp] = useSignUpMutation();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

 const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
  console.log(values);
  try {
    const res = await signUp(values).unwrap();
    console.log('Signup Success:', res);
    resetForm();
  } catch (err) {
    console.error('Signup Failed:', err);
  }
};


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.root}>
          <Header />
          <View style={styles.content}>
            <View style={styles.heading}>
              <Text weight="bold" size={22}>
                Welcome Onboard!
              </Text>
              <Text weight="semibold" color={colors.greyish} size={18}>
                Let’s help you meet your task
              </Text>
            </View>

            <View style={styles.form}>
                  {touched.name && errors.name && (
                <Text color="red">{errors.name}</Text>
              )}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Enter your full name"
                
              />
                {touched.email && errors.email && (
                <Text color="red">{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Enter your email"
              
              />
            
              {touched.password && errors.password && (
                <Text color="red">{errors.password}</Text>
              )}
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Enter password"
                secureTextEntry
            
              />
            {touched.confirmPassword && errors.confirmPassword && (
                <Text color="red">{errors.confirmPassword}</Text>
              )}

              <TextInput
                style={styles.input}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                placeholder="Confirm password"
                secureTextEntry
              
              />
        
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={handleSubmit}>Register</Button>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: verticalScale(8) }}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text color={colors.buttonColor} weight="bold">
                {' '}
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default Registration;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(50),
    backgroundColor: colors.background,
    paddingTop: verticalScale(80),
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
    fontFamily: 'Poppins-regular',
  
  },
  buttonContainer: {
    // alignItems: 'center',
  },
});

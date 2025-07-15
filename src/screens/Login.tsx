import { StyleSheet, TextInput, View,Pressable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'
import { colors } from '../constants/colors'
import { Formik } from 'formik';
import Text from '../UI/Text';
import Button from '../components/Button/Button';
import { scale,verticalScale,moderateScale } from 'react-native-size-matters';
import { LoginValues } from '../utils/Interfaces/interface';
import { useLoginMutation } from '../service/authData';
import { images } from '../constants/images';

const Login = ({navigation}:any) => {
    const [login]=useLoginMutation();
      const initialValues: LoginValues = { email: '', password: '' };
    const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
  console.log(values);
  try {
    const res = await login(values).unwrap();
    console.log('Signup Success:', res);
    resetForm();
  } catch (err) {
    console.error('Signup Failed:', err);
  }
};
  return (
     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <View style={styles.root}>
          <Header />
          <View style={styles.content}>
            <View style={styles.heading}>
              <Text weight="bold" size={22} marginV={29}>
                Welcome Back
              </Text>
            <Image source={images.login} style={styles.img}/>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('task')}
                value={values.email}
                placeholder="Enter your email?"
           
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('task')}
                value={values.password}
                placeholder="Enter your password"
               
              />
           
           
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={handleSubmit}>Login</Button>
          </View>
          <View style={{flexDirection:'row', gap:8, marginVertical:verticalScale(8)}}>
               <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Registration')}>
            <Text color={colors.buttonColor} weight='bold'>SignUp</Text>
          </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default Login

const styles = StyleSheet.create({
    root: {
       flex: 1,
       paddingHorizontal: scale(20),
       paddingBottom: verticalScale(50),
       backgroundColor: colors.background,
       paddingTop:verticalScale(80)
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
       marginTop:verticalScale(10)
     },
     input: {
       width: scale(308),
       height: scale(56),
       backgroundColor: colors.inputgrey,
       marginVertical: verticalScale(8),
       borderRadius: moderateScale(50),
       textAlign: 'center',
       fontSize: 20,
       fontFamily: 'Poppins-regular',
     },
     buttonContainer: {
       alignItems: 'center',
     },
     img:{
      width:scale(158.1),
      height:scale(178.18)
     }
  
})
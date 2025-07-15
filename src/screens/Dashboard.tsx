import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import Header from '../components/Header/Header';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import AnalogClock from '../components/AnalogClock/AnalogClock';
import { images } from '../constants/images';
import Text from '../UI/Text';
import TaskList from '../components/TaskList/TaskList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Feather from '@react-native-vector-icons/feather';
import { logout } from '../features/Auth/authSlice';
import { useDispatch } from 'react-redux';

const getGreeting = (): string => {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};

const Dashboard = () => {
  const userName = useSelector((state: RootState) => state.auth.userName);
  const dispatch=useDispatch()
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.profile}>
    
          <Header />
          
      
        <View style={styles.user}>
          <View style={styles.imageContainer}>
            <Image source={images.profile} style={styles.img} />
          </View>
          <View style={{flexDirection:'row', alignItems:'center', gap:scale(12)}}>
            <Text weight="semibold" color="white" size={22} marginV={15}>
            Welcome Back {userName}
          </Text>
          <TouchableOpacity onPress={()=>dispatch(logout())}>
            <Feather name='log-out'  color='white' size={24}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.clock}>
       <View style={styles.greeting}>
         <Text weight="semibold" size={20}>{getGreeting()}</Text>
       </View>
        <AnalogClock
          size={130}
          colorClock={colors.clockColor}
          colorCenter="white"
          colorNumber={colors.clockNumber}
          colorHour={colors.hourHand}
          colorMinutes={colors.minuteHand}
          colorSeconds="white"
          autostart={true}
          showSeconds
        />
      </View>

     <View style={styles.heading}>
         <Text weight='semibold' size={16}>
        Task list
      </Text>
     </View>
     <TaskList/>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  profile: {
    width: scale(375),
    height: scale(292),
    backgroundColor: colors.dashborad,
  },
  imageContainer: {
    width: scale(100),
    height: scale(100),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  user: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: verticalScale(10),
  },
  clock:{
  
    justifyContent:'center',
    alignItems:'center',
    marginVertical:verticalScale(20)
  },
  greeting:{
    marginRight:scale(-140),
    marginBottom:verticalScale(15)
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  tasklist:{
    padding:moderateScale(20),
    backgroundColor:colors.bgdashboard,
    marginHorizontal:scale(20),
    height:verticalScale(180)
  },
  heading:{
    marginHorizontal:scale(20),
    marginVertical:scale(10)
  }
});

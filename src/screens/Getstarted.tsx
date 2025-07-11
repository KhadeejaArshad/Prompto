import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { images } from '../constants/images';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Text from '../UI/Text';
import Button from '../components/Button/Button';

const Getstarted = () => {
  return (
    <View style={styles.root}>
      <View style={styles.imagecontainer}>
        <Image source={images.homepage} style={styles.img} />
      </View>
      <View style={styles.content}>
            <View style={styles.welcomeimg}>
        <Image source={images.welcome} style={styles.img} />
      </View>
      <Text weight="bold" size={18} marginV={8}>
        Unlock a world of possibilities
      </Text>
     <View style={styles.textContainer}>
       <Text size={12} style={{ lineHeight: 20 }}>
        Here’s your digital personal assistant, making sure your day is well
        panned and organized, giving you real time reminders of Day to Day task
        and keeping you ahead. Get started to get reminded.
      </Text>
     </View>
      </View>

    <View style={styles.button}>
      <Button>Get Started</Button>

    </View>
    </View>
  );
};

export default Getstarted;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
   
    
  },
  imagecontainer: {
    width: 292,
    height: 218,
    position: 'absolute',
    left: -20,
    right: 0,
    top: -70,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  welcomeimg: {
    width: scale(176),
    height: scale(314.21),
    marginVertical:verticalScale(20)
  },
  textContainer:{
    width:scale(262),

  },
  button:{
    paddingBottom:verticalScale(50),
    marginHorizontal:scale(15)


  },
  content:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginTop:verticalScale(100)
  }
});

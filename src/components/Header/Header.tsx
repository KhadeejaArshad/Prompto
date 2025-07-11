import { StyleSheet, View,Image } from 'react-native'
import React from 'react'
import { images } from '../../constants/images'
import { verticalScale,scale,moderateScale } from 'react-native-size-matters'

const Header = () => {
  return (
     <View style={styles.imagecontainer}>
            <Image source={images.homepage} style={styles.img} />
          </View>
  )
}

export default Header

const styles = StyleSheet.create({
     imagecontainer: {
    width: scale(292),
    height: scale(218),
    position: 'absolute',
    left: scale(-50),
    right: scale(0),
    top: verticalScale(-70),
  },
    img: {
    width: '100%',
    height: '100%',
  },
})
import { StyleSheet, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { moderateScale,scale } from 'react-native-size-matters'
import Text from '../../UI/Text'

interface ButtonProps{
    children:React.ReactNode,
    onPress:()=>void
}
const Button = ({children,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttoncontainer} onPress={onPress}>
      <Text color='white' weight='bold' size={18}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
      buttoncontainer:{
        backgroundColor:colors.buttonColor,
        width:scale(318),
        height:scale(50),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:moderateScale(50),
        
    
      }
})
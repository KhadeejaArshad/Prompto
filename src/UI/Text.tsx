import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps,
} from 'react-native';

type FontWeight = 'regular' | 'bold' | 'semibold'|'medium';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  weight?: FontWeight;
  size?: number;
  color?: string;
  alignment?: 'left' | 'center' | 'right' | 'justify';
  marginH?: number;
  marginV?: number;
}


const Text = ({
  children,
  weight = 'regular',
  size = 14,
  color = 'black',
  alignment = 'left',
  marginH = 2,
  marginV = 0,
  ...rest
}: AppTextProps) => {
  const weightStyle = styles[weight]; 
  const sizeStyle = { fontSize: size };
  const colorStyle = { color };
  const marginStyle = { marginHorizontal: marginH, marginVertical: marginV };
  const alignStyle = { textAlign: alignment };

  return (
    <RNText
      {...rest}
      style={[
        styles.text,
        weightStyle,
        sizeStyle,
        colorStyle,
        alignStyle,
        marginStyle,
        rest.style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;



const styles = StyleSheet.create({
  text: {
 
  },
  regular: {
    fontFamily:'Poppins-Regular',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  medium:{
      fontFamily: 'Poppins-Medium',

  }
});
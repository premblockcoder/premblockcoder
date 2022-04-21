import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Fonts } from '../../Res';
import { colors } from '../../Res/Colors';


export const Button = ({
  text,
  onPress,
  styling,
  textstyle,
  img
}) => (
  <TouchableOpacity
    style={[styles.container, styling]}
    onPress={onPress}>
    <Text style={[styles.title, textstyle]}> {text} </Text>
    <Image source={img}  style={{marginTop:2}}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 49,
    backgroundColor: colors.blue,
    borderRadius: 7,
    flexDirection:"row",
    width:"100%",
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontFamily: Fonts.SourceSansProSemiBold
  },
});

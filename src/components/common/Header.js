import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../../Res';

export const CustomHeader = ({ text, textstyle, back,right }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.view}>
        <View style={styles.container}>
          {back &&
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ height: 18, width: 11,top:1 }}
                source={Images.arrowback} />
            </TouchableOpacity>}
          <Text style={[styles.title, textstyle]}> {text} </Text>
        </View>
        {right &&
        <Image source={Images.setting}/> }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 11,
 
  },
  view: {
    height: 44,
    backgroundColor: colors.blue,
    alignItems: "center",
    flexDirection: "row",
    justifyContent:"space-between",
    paddingRight:20
  },
  container: {
    alignItems: "center", flexDirection: "row", paddingStart: 20,
  }
});

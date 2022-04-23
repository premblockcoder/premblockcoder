import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
} from 'react-native';
import { Fonts } from '../../Res';
import { colors } from '../../Res/Colors';

export const InputText = ({
  placeholder,
  showright,
  rightimg,
  placeholderTextColor,
  secureTextEntry,
  inputstying,
  onChangeText
}) => (
  <>
    <View
      style={[styles.input, inputstying]}>
      <TextInput
        style={styles.view}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {
        showright &&
        <Image source={rightimg}
        />
      }
    </View>
  </>
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 54,
    backgroundColor: colors.inputgray,
    borderRadius: 6,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1, fontSize: 16,
    color: colors.darktextgray,
    fontFamily: Fonts.SourceSansProRegular
  }
});

import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, StatusBar } from 'react-native';
import { ScrollView } from 'react-native';
import { Button, InputText } from '../../components/common';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';

const ForgotPassword = ({ navigation }) => {

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
        <ScrollView style={{ flex: 1}} >
          <View style={styles.imgview}>
            <Image source={Images.art4}
              style={styles.img} />
          </View>
          <View style={styles.containter}>
            <View>
              <Text style={styles.text}>Forgot Password</Text>
              <Text style={styles.txt}>We will send the updated password link on your registered email</Text>
            </View>
            <View style={{ marginTop: 18 }}>
              <InputText placeholder={"Email Address"} showright rightimg={Images.at}
              />
              <View style={{ marginTop: 42}}>
                <Button onPress={() => navigation.navigate('Login')}
                  styling={styles.logbtn}
                  text={"Submit"}></Button>
              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
export default ForgotPassword

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: colors.blue,
    marginTop: 90,
    fontSize: 29,
    fontWeight: 'bold'
  },
  txt: {
    color: colors.textlightgray,
    fontSize: 14,
    marginTop: 10,

  },
  imgview: {
    justifyContent: 'center', alignItems: 'center', marginTop: 90,
  }

})
import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, } from 'react-native';
import { Images } from '../../Res/Images';
import { colors } from '../../Res/Colors';
import { InputText } from '../../components/common';
import { Button } from '../../components/common';
import { Fonts } from '../../Res';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loader from '../../components/common/Loader';
import Toast from 'react-native-toast-message';
import { CommonActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/users.actions';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {
  const [user, setuser] = useState({
    emailId: '', password: '',
  })

  const isLoading = useSelector(state => state.users.isRequesting)
  const dispatch = useDispatch()

  const _loginUser = () => {
    if (!user.emailId) {
      Toast.show({
        type: 'error',
        text1: 'Please enter email.',
      })
      return
    }
    if (!user.password) {
      Toast.show({
        type: 'error',
        text1: 'Please enter password.',
      })
      return
    }
    dispatch(loginUser(user)).then(res => {
      if (res) {
      AsyncStorage.setItem('access_token', res?.data)
      // const user = {
      //   ...res,
      // }
      // AsyncStorage.setItem('user', JSON.stringify(user))
        Toast.show({
          type: 'success',
          text1: res?.message,
        })
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Dashboard',
                params: {
                  type: 'login',
                },
              },

            ],
          })
        )
      }
    })
  }


  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
        <Loader isLoading={isLoading} />
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: colors.white }}>
          <Image source={Images.art3}
            style={styles.img} />
          <View style={styles.containter}>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.text}>User Login </Text>
              <Text style={styles.txt}> Enter your Email and Password for Login up </Text>
            </View>
            <View style={{ marginTop: 26 }}>
              <InputText placeholder={"Email Address"} placeholderTextColor={colors.darktextgray}
                showright rightimg={Images.at}
                onChangeText={(t) => setuser({ ...user, emailId: t })} />
              <InputText placeholder={"Password"} placeholderTextColor={colors.darktextgray}
                showright rightimg={Images.lock}
                secureTextEntry
                inputstying={{ marginTop: 14 }}
                onChangeText={(t) => setuser({ ...user, password: t })}
              />
            </View>
            <View style={{ marginTop: 34 }}>
              <Button
                text={"Login"} img={'arrowright'}
                onPress={_loginUser}
              />
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text
                  style={styles.forTxt}> Forgot Password? </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.last}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.newTxt}>New Member?<Text style={styles.regTxt}> Register Now </Text> </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>


    </>
  )
}
export default Login


const styles = StyleSheet.create({
  containter: {
    flex: 1,
    paddingHorizontal: 20,

  },
  text: {
    color: colors.blue,
    fontSize: 29,
    fontFamily: Fonts.SourceSansProBold

  },
  img: {
    alignSelf: "center",
    marginTop: 42
  },
  txt: {
    fontSize: 14,
    marginTop: 10,
    color: colors.textlightgray,
    fontFamily: Fonts.SourceSansProRegular

  },
  forTxt: {
    color: '#0C0C0C',
    fontSize: 15,
    marginTop: 22,
    textAlign: 'center',
    fontFamily: Fonts.SourceSansProSemiBold
  },
  newTxt: {
    color: '#1C1C1C',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.SourceSansProRegular

  },
  regTxt: {
    color: '#35469E',
    fontSize: 18,
    fontFamily: Fonts.SourceSansProBold
  },
  last: {
    borderTopColor: colors.bordergray, borderTopWidth: 1,
    paddingVertical: 14,
    marginTop: 85
  }

})
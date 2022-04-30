import React, { useEffect, useState, useRef } from 'react'
import { View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '~/redux/actions/users.actions'
import Toast from 'react-native-toast-message'
import { Button, CustomHeader, InputText, } from '../../../components/common'
import Loader from '../../../components/common/Loader'
import ImagePicker from 'react-native-image-crop-picker'
import { colors, Images } from '../../../Res'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.users.isRequesting)
  const [imagePickerRefVisibility, setImagePickerRefVisibility] = useState('none')
  const imagePickerRef = useRef()
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
  })

  const getInitialData = async () => {
    let user = await AsyncStorage.getItem('user')

    user = JSON.parse(user)

    setSignupData({
      ...signupData,
      name: user.name,
      email: user.email,
      logo: user.logo,
    })
  }

  useEffect(() => {
    getInitialData()
  }, [])

  // const updateProfile = () => {
  //   let data = {...signupData}
  //   if(data.logo.startsWith('http')) delete data.logo
  //   dispatch(updateUser(signupData)).then(async res => {
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Your profile has been updated successfully.',
  //       text1NumberOfLines: 2,
  //     })
  //     const modifiedUserData = {
  //       ...res.result.details,
  //       logo: res.result.base_path + '/' + res.result.details.logo
  //     }
  //     let user = await AsyncStorage.getItem('user')
  //     user = JSON.parse(user)
  //     user = { ...user, ...modifiedUserData }
  //     console.log('user', user)
  //     AsyncStorage.setItem('user', JSON.stringify(user))
  //     navigation.goBack()
  //   })
  // }

  const openCamera = () => {
    ImagePicker.openCamera({
      includeBase64: true,
      cropping: true,
      compressImageQuality: 0.8,
    }).then(image => {
      if (!image) return
      setSignupData({
        ...signupData,
        logo: 'data:image/jpeg;base64,' + image.data,
      })
    })
  }

  const chooseImages = () => {
    imagePickerRef.current.focus()
    setImagePickerRefVisibility('flex')
  }

  const chooseImagesFromGallery = async () => {
    ImagePicker.openPicker({
      includeBase64: true,
      cropping: true,
      compressImageQuality: 0.8,
    }).then(image => {
      if (!image) return
      setSignupData({
        ...signupData,
        logo: 'data:image/jpeg;base64,' + image.data,
      })
    })
  }

  return (
    <>
      <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
      <SafeAreaView style={styles.container} edges={['top']}>
        <Loader isLoading={isLoading} />
        <View style={styles.wrapper}>
          <CustomHeader text={'Profile'} back />
          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={styles.form}
            extraScrollHeight={30}
            extraHeight={30}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                alignSelf: 'center',
                borderRadius: 50,
                marginBottom: 30,
                width: 100,
                height: 100,
                borderWidth: 0.3,
                borderColor: '#999899',
              }}>
              {signupData.logo ? (
                <Image
                  source={{ uri: signupData.logo }}
                  borderRadius={50}
                  style={{ width: 100, height: 100 }}></Image>
              ) : (
                <Image
                  source={Images.dummyprofile}
                  borderRadius={50}
                  style={{ width: 100, height: 100, }} />
              )}
              <TouchableOpacity activeOpacity={0.7} onPress={chooseImages} style={styles.camera}>
                <Ionicons name='md-add-circle-sharp'
                  size={35}
                  color={colors.blue}
                   />
              </TouchableOpacity>
            </TouchableOpacity>

            <InputText
              inputstying={[styles.input]}
              value={signupData.name}
              onChangeText={text => {
                setSignupData({
                  ...signupData,
                  name: text,
                })
              }}
              placeholder={'Full Name'}
              editable={false}
            />
            <InputText
              inputstying={[styles.input]}
              value={signupData.email}
              onChangeText={text => {
                setSignupData({
                  ...signupData,
                  email: text,
                })
              }}
              placeholder={'Email'}
              editable={false}
            />
            <Button
              onPress={() => alert("g")}
              text={'Update Profile'}
              styling={{ marginTop:10}}
            />
          </KeyboardAwareScrollView>
          <Picker
            ref={imagePickerRef}
            style={{ display: imagePickerRefVisibility }}
            selectedValue={''}
            onValueChange={(itemValue, itemIndex) => {
              if (!itemValue) return
              console.log('itemValue', itemValue)
              if (itemValue == 'camera') {
                openCamera()
              } else {
                chooseImagesFromGallery()
              }
              setTimeout(() => {
                setImagePickerRefVisibility('none')
              }, 200);
            }}>
            <Picker.Item label="Choose Option" value="" />
            <Picker.Item label="Camera" value="camera" />
            <Picker.Item label="Gallery" value="gallery" />
          </Picker>
        </View>
      </SafeAreaView>
    </>
  )
}

export default MyProfile

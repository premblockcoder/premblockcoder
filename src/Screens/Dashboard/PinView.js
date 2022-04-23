import React, { useEffect, useRef, useState } from "react"
import { ImageBackground, SafeAreaView, View, StatusBar, StyleSheet, Image, Text } from "react-native"
import ReactNativePinView from "react-native-pin-view"
import { colors } from "../../Res/Colors"
import { Images } from '../../Res/Images';

const PinView = () => {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState({ pin: "", confirm: "" })
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  const [showtext, setshowtext] = useState(false)

  useEffect(() => {
    if (enteredPin.pin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.pin.length === 4) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])

  console.log(enteredPin.pin, "enteredpin")


  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={"light-content"} />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.darkblue, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Image source={Images.logo}
            style={styles.img}
          />
        </View>
        <Text style={styles.text}>{showtext ? "Confirm your new PIN" : "Enter Pin"}
        </Text>
        <View style={{ backgroundColor: colors.darkblue, justifyContent: "center", alignItems: "center" }}>
          <ReactNativePinView
            inputSize={22}
            ref={pinView}
            pinLength={4}
            buttonSize={60}
            onValueChange={value => setEnteredPin({ ...enteredPin, pin: value, })}
            buttonAreaStyle={{
              marginTop: 24,
            }}
            inputAreaStyle={{
              marginBottom: 24,
            }}
            inputViewEmptyStyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "#FFF",
            }}
            inputViewFilledStyle={{
              backgroundColor: "#FFF",
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: "#FFF",
            }}
            buttonTextStyle={{
              color: "#FFF",
            }}
            onButtonPress={key => {

              console.log(key, "keyy")
              if (key === "custom_left") {
                pinView.current.clear()
              }
              if (key === "custom_right") {
                if (enteredPin.pin) {
                  const pinfirst = enteredPin.pin
                  console.log(pinfirst, "first")
                  pinView.current.clearAll()
                }
                else {
                  setshowtext(true)
                }

              }
              // if (key === "three") {
              //   alert("You can't use 3")
              // }
            }}
            customLeftButton={showRemoveButton ? <Image source={Images.arrowback} style={{ tintColor: "white" }} /> : undefined}
            customRightButton={showCompletedButton ? <Image source={Images.arrow} style={{ tintColor: "white" }} /> : undefined}
          />
        </View>
      </SafeAreaView>
    </>
  )
}
export default PinView

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    paddingHorizontal: 20
  },
  img: {
    height: 60,
    width: 60

  },
  text: {
    color: colors.white,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20

  },
})
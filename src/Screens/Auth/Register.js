import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView,TouchableOpacity,StatusBar } from 'react-native';
import { Images } from '../../Res/Images';
import { colors } from '../../Res/Colors';
import { InputText } from '../../components/common';
import { Button } from '../../components/common';


const Register = ({ navigation }) => {
    return (
        <>
          <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white, }}>
                <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
                    <Image source={Images.art1}
                        style={styles.img} />
                    <View style={styles.containter}>
                        <View style={{ marginTop: 22, }}>
                            <Text style={styles.text}>Create a New Account</Text>
                            <Text style={styles.txt}> Create an account so you can manage your {"\n"} crypto balance</Text>
                        </View>
                        <View style={{ marginTop: 22 }}>
                            <InputText placeholder={"Full Name"}
                                placeholderTextColor={colors.darktextgray} />
                            <InputText placeholder={"Email Address"} 
                                placeholderTextColor={colors.darktextgray}
                                inputstying={{ marginTop: 14 }} />
                            <InputText placeholder={"Password"}
                                placeholderTextColor={colors.darktextgray}
                                inputstying={{ marginTop: 14 }} 
                                secureTextEntry/>
                            <InputText placeholder={"Confirm Password"}
                                placeholderTextColor={colors.darktextgray}
                                inputstying={{ marginTop: 14 }}
                                secureTextEntry />
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={styles.title}> I agree to our <Text style={styles.titletxt}>Terms of Services <Text style={styles.title}>and </Text><Text style={styles.titletxt}>Privacy{"\n"} Policy.</Text>
                            </Text>
                            </Text>
                        </View>
                        <View style={{marginTop:20}}>
                            <Button onPress={() => navigation.navigate('VerifyEmail')}
                                styling={styles.logbtn}
                                text={"Continue"}>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.last}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.newTxt}>Joined us before? <Text style={styles.regTxt}>Login </Text> </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </>
    )
}
export default Register


const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: colors.blue,
        marginTop: 10,
        fontSize: 29,
        fontWeight: 'bold'
    },
    img: {
        marginTop: 18,
        alignSelf: "center"
    },
    txt: {
        color: colors.textlightgray,
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20
    },
    newTxt: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center'

    },
    regTxt: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    title: {
        color: colors.lightblack,
        fontSize: 13,
    },
    titletxt: {
        color: colors.blue,
        fontSize: 13,
        lineHeight: 18

    },
    last: {
        borderTopColor: colors.bordergray, borderTopWidth: 1, paddingVertical:14
      }
})
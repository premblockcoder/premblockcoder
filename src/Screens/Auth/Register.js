import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar, } from 'react-native';
import { Images } from '../../Res/Images';
import { colors } from '../../Res/Colors';
import { InputText } from '../../components/common';
import { Button } from '../../components/common';
import { Fonts } from '../../Res';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';


const Register = ({ navigation }) => {
    const [user, setuser] = useState({
        name: '', email: '', password: '', confirmpassword: ''
    })

    const _register = () => {
        if (!user.name == "" || !user.email == "" || !user.password == "") {
            axios.post('http://192.168.1.23:4000/api/v1/auth/register', {
                fullName: user.name,
                emailId: user.email,
                password: user.password,
                confirmPassword: user.confirmpassword
            })
                .then((res) => {
                    console.log(res?.data,"resregister"); 
                    navigation.navigate('VerifyEmail')
                })
                .catch((error) => {
                    console.log({error});
                });           
        }
        else {
            alert("Enter Detail")
        }
    }
    console.log(user)

    return (
        <>
            <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
                <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: colors.white }}>
                    <Image source={Images.art1}
                        style={styles.img} />
                    <View style={styles.containter}>
                        <View style={{ marginTop: 22, }}>
                            <Text style={styles.text}>Create a New Account</Text>
                            <Text style={styles.txt}> Create an account so you can manage your {"\n"} crypto balance</Text>
                        </View>
                        <View style={{ marginTop: 22 }}>
                            <InputText placeholder={"Full Name"}
                                placeholderTextColor={colors.darktextgray}
                                onChangeText={(t) => setuser({ ...user, name: t })} />
                            <InputText placeholder={"Email Address"}
                                placeholderTextColor={colors.darktextgray}
                                inputstying={{ marginTop: 14 }}
                                onChangeText={(t) => setuser({ ...user, email: t })} />
                            <InputText placeholder={"Password"}
                                placeholderTextColor={colors.darktextgray}
                                inputstying={{ marginTop: 14 }}
                                secureTextEntry
                                onChangeText={(t) => setuser({ ...user, password: t })} />
                            <InputText placeholder={"Confirm Password"}
                                placeholderTextColor={colors.darktextgray}
                                inputstying={{ marginTop: 14 }}
                                secureTextEntry
                                onChangeText={(t) => setuser({ ...user, confirmpassword: t })} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.title}> I agree to our <Text style={styles.titletxt}>Terms of Services <Text style={styles.title}>and </Text><Text style={styles.titletxt}>Privacy{"\n"} Policy.</Text>
                            </Text>
                            </Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button onPress={() => _register()}
                                styling={styles.logbtn}
                                text={"Continue"}>
                            </Button>
                        </View>
                    </View>
                    <View style={styles.last}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.newTxt}>Joined us before? <Text style={styles.regTxt}>Login </Text> </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
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
        fontFamily: Fonts.SourceSansProBold
    },
    img: {
        marginTop: 18,
        alignSelf: "center"
    },
    txt: {
        color: colors.textlightgray,
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20,
        fontFamily: Fonts.SourceSansProRegular

    },
    newTxt: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: Fonts.SourceSansProRegular
    },
    regTxt: {
        color: colors.blue,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Fonts.SourceSansProBold
    },
    title: {
        color: colors.lightblack,
        fontSize: 13,
        fontFamily: Fonts.SourceSansProSemiBold
    },
    titletxt: {
        color: colors.blue,
        fontSize: 13,
        lineHeight: 18,
        fontFamily: Fonts.SourceSansProSemiBold
    },
    last: {
        borderTopColor: colors.bordergray,
        borderTopWidth: 1, paddingVertical: 14, marginTop: 40
    }
})
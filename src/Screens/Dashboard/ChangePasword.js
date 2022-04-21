import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { Button, Button2, CustomHeader, Header, InputText } from '../../components/common';
import { Fonts } from '../../Res';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';


const ChangePassword = ({ navigation }) => {
    return (
        <>
         <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <CustomHeader text={"Change Password"} back />
                <View style={{ flex: 1 }}>
                    
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.containter}>
                          
                            <View style={{ marginTop: 40 }}>
                                <Text style={styles.text}>Old Password</Text>
                                <InputText placeholder={"Enter old password"} placeholderTextColor={colors.gray }
              />
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.text}>New Password</Text>
                                <InputText placeholder={"Enter new password"} placeholderTextColor={colors.gray }
              />
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.text}>Confirm Password</Text>
                                <InputText placeholder={"Confirm password"} placeholderTextColor={colors.gray }
              />
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, marginTop: 32 }}>
                            <Button onPress={() => navigation.navigate('Login')}
                                styling={{ height: 52 }}
                                text={'Submit'}
                                textstyle={{ fontSize: 16, fontWeight: "600" }}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}
export default ChangePassword

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: colors.black,
fontFamily:Fonts.SourceSansProSemiBold,
        fontSize: 16,
        marginBottom:10
    },
    text2: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,

    },
    vieww: {
        height: 61,
        width: "100%",
        backgroundColor: colors.borderblue,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 19,
        alignItems: "center"

    },
    box: {
        height: 54,
        width: "100%",
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 29,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16

    },
    input1: {
        borderColor: colors.black,
        backgroundColor: colors.white,
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 6,
        flex: 1,
    },
    text3: {
        color: colors.blue,
        fontWeight: "600",
        fontSize: 16,
        marginRight: 17

    },
    text4: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    text5: {
        color: colors.white,
        fontSize: 16,
    },
    Image: {
        height: 24,
        width: 24,
        tintColor: colors.blue
    },

})
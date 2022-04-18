import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TextInput } from 'react-native';
import { Button, CustomHeader } from '../../components/common';
import { colors } from '../../Res/Colors';

const PrivateKey = ({ navigation, route }) => {
    const { type } = route?.params

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <CustomHeader text={type === "PrivateKey" ? "By Private Key" : "By Mnemonic Phrase"} back />
                <View style={styles.containter}>
                    <View>
                        <Text style={styles.text}>{type === "PrivateKey" ? "Enter Private Key" : "Please enter mnemonic phrases and separated them by a space"} </Text>
                        <TextInput
                            style={styles.view} multiline={true} placeholder={"Enter Key"} >
                        </TextInput>
                        <View style={{ marginTop: 34 }}>
                            <Button
                                text={'Start Import'}
                                styling={{ backgroundColor: colors.darkblue,height:52 }}
                                textstyle={{ fontSize: 16, fontWeight: "600" }}
                                onPress={()=> navigation.navigate('Wallet') }
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
export default PrivateKey

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: colors.black,
        fontWeight: "600",
        fontSize: 16,
        marginTop: 26,
        lineHeight:24
    },

    view: {
        height: 99,
        width: "100%",
        borderColor: colors.bordergray,
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 9,
        paddingHorizontal: 20,
        paddingTop: 10
    },

})
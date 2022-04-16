import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, ScrollView,StatusBar } from 'react-native';
import { Button, CustomHeader,  InputText } from '../../components/common';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';


const GenerateWallet = ({ navigation }) => {

    return (
        <>
           <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <CustomHeader text={"Generate Wallet"} back />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.containter}>
                        <View>
                            <View style={styles.view}>
                                <Text style={styles.text}>Name</Text>
                                <InputText inputstying={styles.input}
                                    placeholder={"Wallet 1"} placeholderTextColor={colors.black} />
                            </View>
                            <View style={[styles.view, { marginTop: 15 }]}>
                                <Text style={styles.text}>Password</Text>
                                <InputText inputstying={styles.input}
                                    placeholder={"Password"} secureTextEntry placeholderTextColor={colors.black} />
                            </View>
                            <View style={[styles.view, { marginTop: 15 }]}>
                                <Text style={styles.text}>Confirm Password</Text>
                                <InputText inputstying={styles.input}
                                    placeholder={"Confirm Password"} secureTextEntry placeholderTextColor={colors.black}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.last}>
                    <Button
                        text={'Next'}
                        styling={styles.btn}
                        textstyle={styles.btntext}
                        onPress={()=> navigation.navigate('RecoveryPharse')}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}
export default GenerateWallet

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    text: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,

    },
    input: {
        fontSize: 18,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.black,
        marginTop: 6,
        color: colors.black
    },
    view: {
        marginTop: 27
    },
    btn: {
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.borderblue,

    },
    btntext: {
        color: colors.borderblue,
        fontSize: 16,
        fontWeight: "600"
    },
    last: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 34,
        paddingHorizontal: 20,
    }

})
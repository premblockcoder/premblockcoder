import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput,StatusBar } from 'react-native';
import { Button, CustomHeader } from '../../components/common';
import { Fonts } from '../../Res';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';

const SendBitcoin = ({ navigation }) => {
    return (
        <>
         <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <CustomHeader back text={"Send Bitcoin"} />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.containter}>
                        <View style={{ marginTop: 21 }}>
                            <Text style={styles.text}>Currency</Text>
                            <TouchableOpacity style={styles.view}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={Images.BTC}
                                        style={styles.img} />
                                    <Text style={styles.text7}>Bitcoin</Text>
                                </View>
                                <Image source={Images.downarrow}
                                    style={styles.img2} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 23 }}>
                            <Text style={styles.text}>Recipient</Text>
                            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 6 }}>
                                <View style={styles.view4}>
                                    <TextInput style={{ flex: 1, marginLeft: 14, fontFamily:Fonts.SourceSansProRegular, fontSize: 18 }}
                                        placeholder={"Paste or scan address"} placeholderTextColor={colors.gray} ></TextInput>
                                </View>
                                <View style={styles.view5}>
                                    <Image source={Images.scan2}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.text}>Amount</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6, alignItems: "center" }}>
                                <View style={styles.view2}>
                                    <TextInput style={styles.text3} placeholder={"0"} placeholderTextColor={colors.blue}
                                        keyboardType={"numbers-and-punctuation"} />
                                    <Text style={styles.text6}>BTC</Text>
                                </View>
                                <Image source={Images.arrow} />
                                <View style={styles.view2}>
                                    <TextInput style={styles.text3} placeholder={"0"} placeholderTextColor={colors.blue}
                                        keyboardType={"numbers-and-punctuation"} />
                                    <Text style={styles.text6}>USD</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.text}>Description</Text>
                            <View style={styles.view3}>
                                <TextInput style={{ flex: 1, paddingHorizontal: 15, paddingTop: 12 }}
                                    multiline={true}
                                    placeholder={"Description"} />
                            </View>
                        </View>
                        <View style={styles.trans}>
                            <Text style={styles.text}> Transaction Fee: </Text>
                            <Text style={styles.text5}>0.00001356 BTC (0.12 USD)</Text>
                        </View>
                        <View style={{ flex: 1, marginTop: 15 }}>
                            <Button onPress={() => navigation.navigate('ConfirmSend')}
                                text={'Continue'}
                                styling={{ height: 52 }}
                                textstyle={{ fontSize: 16, }}
                            />
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
    )
}
export default SendBitcoin

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 17,
    },
    text: {
        color: colors.black,
        fontFamily:Fonts.SourceSansProSemiBold,
        fontSize: 15,
    },
    text2: {
        color: colors.black,
        fontFamily:Fonts.SourceSansProSemiBold,
        fontSize: 16,
        marginTop: 15

    },

    box: {
        height: 54,
        width: "100%",
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 29,

    },
    view: {
        height: 45,
        width: "100%",
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 14,
        alignItems: "center"

    },
    view4: {
        flexDirection: 'row',
        height: 45,
        width: "85%",
        borderColor: colors.black,
        borderWidth: 1,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    view5: {
        height: 45,
        width: "15%",
        borderColor: colors.black,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        alignItems: "center",
        justifyContent: "center",

    },
    view3: {
        height: 102,
        width: "100%",
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 6,
    },
    view2: {
        height: 45,
        width: "40%",
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 9
    },
    input: {
        color: colors.black,
        fontSize: 18,
        paddingLeft: 15,
    },
    text3: {
        color: colors.blue,
        fontFamily:Fonts.SourceSansProSemiBold,
        fontSize: 18,
        paddingHorizontal: 5,
        flex: 1
    },
    text7: {
        color: colors.blue,
        fontFamily:Fonts.SourceSansProSemiBold,
        fontSize: 18,
        marginLeft: 6,
    },
    text4: {
        color: colors.white,

        fontFamily:Fonts.SourceSansProSemiBold,
        fontSize: 16,
        marginTop: 20,
    },
    text5: {
        color: colors.black,
        fontSize: 12,
        fontFamily:Fonts.SourceSansProSemiBold,
    },
    text6: {
        color: colors.textlightgray,
        fontSize: 18,
        fontFamily:Fonts.SourceSansProRegular

    },
    img: {
        height: 21,
        width: 21,
    },
    img2: {
        height: 7,
        width: 12,
    },
    trans: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25, alignItems: "center",
        paddingRight: 17
    }


})
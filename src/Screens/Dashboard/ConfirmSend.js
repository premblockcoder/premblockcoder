import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import { Button, CustomHeader, Header } from '../../components/common';
import { Fonts } from '../../Res';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';


const ConfirmSend = ({ navigation }) => {

    return (
        <>
            <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <CustomHeader text={"Confirm Send"} back />
                <View style={styles.containter}>
                    <Text style={styles.text}>Transaction Detail </Text>
                    <View style={styles.box}>
                        <Text style={styles.text2}>Currency </Text>
                        <Text style={styles.text3}>Bitcoin </Text>
                    </View>
                    <View style={styles.box2}>
                        <View style={{}}>
                            <Text style={styles.text2}>To </Text>
                            <Text style={styles.text3}>1GLrWy2GuZi8rg7nT6dAJrW8kxJZZ6dHks</Text>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.text2}>Transaction Fee </Text>
                        <Text style={styles.text3}>0.00001356 BTC (0.12 USD)</Text>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.text2}>Total </Text>
                        <Text style={styles.text3}>0.00022532 BTC (12.14 USD)</Text>
                    </View>
                    <View style={{ marginTop: 24 }}>
                        <Button
                            text={"Confirm & Send"}
                            styling={{ height: 52 }}
                            textstyle={{ fontSize: 16, }}
                            onPress={() => navigation.navigate('CompleteTrans')} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )


}
export default ConfirmSend

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 17
    },
    box: {
        height: 69,
        width: "100%",
        borderWidth: 1,
        marginTop: 6,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        paddingHorizontal: 20,
        justifyContent: "center"

    },
    box2: {
        height: 69,
        width: "100%",
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    box3: {
        height: 69,
        width: "100%",
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    text: {
        color: colors.black,
        marginTop: 21,
        fontSize: 16,
        fontFamily: Fonts.SourceSansProSemiBold
    },
    text2: {
        color: colors.blue,
        fontSize: 15,
        fontFamily: Fonts.SourceSansProSemiBold

    },
    text3: {
        color: colors.black,
        fontSize: 15,
        lineHeight: 22,
        fontFamily: Fonts.SourceSansProSemiBold

    },
    resbtn: {
        borderColor: colors.white,
        borderWidth: 2,
        marginTop: 20

    }
})
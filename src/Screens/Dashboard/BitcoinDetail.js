import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, TouchableOpacity, Text, FlatList, StatusBar, ScrollView } from 'react-native';
import { Images } from '../../Res/Images';
import { CustomHeader } from '../../components/common/Header';
import { colors } from '../../Res/Colors';
import { StatusModal } from '../../components/StatusModal';
import { QRModal } from '../../components/QRModal';
import { Fonts } from '../../Res';
import Feather from 'react-native-vector-icons/Feather'

const BitcoinDetail = ({ navigation, route }) => {
    const [active, setsctive] = useState("All")
    const [modalVisible, setModalVisible] = useState(false);
    const [QRVisible, setQRVisible] = useState(false);
    const coinname = route?.params?.Name

    const Data = [
        {
            id: 1,
            bitcoinstatus: "Sent polygon",
            status: "Success",
            BTC: "-0.00142263 MATIC",
            amount: "-$12.50",
            img: 'arrow-up-right'
        },
        // {
        //     id: 2,
        //     bitcoinstatus: "Received Bitcoin",
        //     status: "Success",
        //     BTC: "-0.00142263 BTC",
        //     amount: "-$12.50",
        //     img: 'download'
        // },
        // {
        //     id: 3,
        //     bitcoinstatus: "Received Bitcoin",
        //     status: "Success",
        //     BTC: "-0.00142263 BTC",
        //     amount: "-$12.50",
        //     img: 'download'
        // },
        // {
        //     id: 4,
        //     bitcoinstatus: "Deposit Bitcoin",
        //     status: "Cancel",
        //     BTC: "-0.00142263 BTC",
        //     amount: "-$12.50",
        //     img: 'credit-card'
        // },
        // {
        //     id: 5,
        //     bitcoinstatus: "Received Bitcoin",
        //     status: "Pending",
        //     BTC: "-0.00142263 BTC",
        //     amount: "-$12.50",
        //     img: 'download'
        // },
        // {
        //     id: 6,
        //     bitcoinstatus: "Sent Bitcoin",
        //     status: "Success",
        //     BTC: "-0.00142263 BTC",
        //     amount: "-$12.50",
        //     img: 'arrow-up-right'
        // },
        // {
        //     id: 7,
        //     bitcoinstatus: "Sent Bitcoin",
        //     status: "Success",
        //     BTC: "-0.00142263 BTC",
        //     amount: "-$12.50",
        //     img: 'arrow-up-right'
        // },
    ]

    const render = (item) => {
        return (
            <TouchableOpacity style={styles.flatlist} onPress={() => setModalVisible(true)}>
                <Feather name={item.img}
                    color={colors.blue} size={15}
                    style={{ borderWidth: 1, padding: 6, borderRadius: 15, borderColor: colors.blue }} />
                <View style={{ flex: 1, paddingHorizontal: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.sent}>{item.bitcoinstatus} </Text>
                        <Text style={styles.btc} > {item.BTC} </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 3 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={[styles.dot,
                            {
                                backgroundColor: item?.status === "Pending" ? colors.yellow :
                                    item?.status === "Cancel" ? colors.red : colors.green
                            }]} />
                            <Text style={styles.status}> {item.status} </Text>
                        </View>

                        <Text style={styles.Amount}> {item.amount} </Text>
                    </View>
                </View>
                <Image source={Images.arrowright} style={{ tintColor: colors.blue }} />
            </TouchableOpacity>
        )
    }

    return (
        <>
            <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
                <CustomHeader text={coinname || "Polygon"} back />
                <View style={styles.container}>
                    <View style={styles.view}>
                        <Image source={Images.polygon} style={{width:68,height:68}} />
                        <Text style={styles.text}> 0.1 MATIC</Text>
                    </View>
                    <View style={styles.btnview}>
                        <TouchableOpacity style={[styles.btn,
                        { backgroundColor: active !== "All" ? colors.white : colors.skyblue }]}
                            onPress={() => setsctive("All")} >
                            <Text style={[styles.btntext,
                            {
                                color: active !== "All" ? colors.black : colors.white, fontFamily: Fonts.SourceSansProSemiBold
                            }]}> All </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,
                        { backgroundColor: active !== "Sent" ? colors.white : colors.skyblue }]}
                            onPress={() => setsctive("Sent")}>
                            <Text style={[styles.btntext,
                            { color: active !== "Sent" ? colors.black : colors.white }]}> Sent </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,
                        { backgroundColor: active !== "Received" ? colors.white : colors.skyblue }]}
                            onPress={() => setsctive('Received')} >
                            <Text style={[styles.btntext,
                            { color: active !== "Received" ? colors.black : colors.white }]}> Received </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,
                        { backgroundColor: active !== "Deposit" ? colors.white : colors.skyblue }]}
                            onPress={() => setsctive('Deposit')}>
                            <Text style={[styles.btntext,
                            { color: active !== "Deposit" ? colors.black : colors.white }]}> Deposit </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) => render(item)}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.con}

                    />
                    <View style={styles.last}>
                        <View style={styles.sendview}>
                            <TouchableOpacity style={{ alignItems: "center" }}
                                onPress={() => navigation.navigate('SendBitcoin')}>
                                <Image source={Images.send} />
                                <Text style={styles.sendtext}> Send </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center" }}
                                onPress={() => setQRVisible(true)}>
                                <Image source={Images.receive} />
                                <Text style={styles.sendtext}> Receive </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: "center" }}>
                                <Image source={Images.buy} />
                                <Text style={styles.sendtext}> Buy </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <StatusModal Visible={modalVisible} setModalVisible={setModalVisible} />
                <QRModal Visible={QRVisible} setModalVisible={setQRVisible}
                    walletaddress={'0'} SelectedWallet={'0'} />
            </SafeAreaView>
        </>
    )

}
export default BitcoinDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    view: {
        backgroundColor: colors.blue,
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30

    },
    text: {
        fontSize: 39,
        marginTop: 7,
        color: colors.white,
        fontFamily: Fonts.SourceSansProLight
    },
    btnview: {
        flexDirection: "row",
        paddingStart: 20,
        paddingEnd: 34,
        marginTop: 14
    },
    btn: {
        backgroundColor: colors.skyblue,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 17,
    },
    btntext: {
        color: colors.white,
        fontSize: 15
    },
    flatlist: {
        flexDirection: "row",
        paddingHorizontal: 17,
        paddingVertical: 16,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: colors.borderlightgray,
    },
    sent: {
        fontSize: 15,
        color: colors.black,
        fontFamily: Fonts.SourceSansProSemiBold
    },
    status: {
        fontSize: 13,
        color: colors.textlightgray,
        marginLeft: 4,
        fontFamily: Fonts.SourceSansProRegular


    },
    btc: {
        fontSize: 12,
        color: colors.black,
        fontFamily: Fonts.SourceSansProSemiBold

    },
    Amount: {
        fontSize: 11,
        color: colors.textlightgray,
        fontFamily: Fonts.SourceSansProRegular

    },
    dot: {
        width: 8, height: 8, borderRadius: 10
    },
    last: {
        backgroundColor: colors.blue,
        height: 73,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0
    },
    sendview: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        position: "absolute",
        bottom: 18
    },
    con: {
        marginTop: 18, borderTopWidth: 1, borderTopColor: colors.borderlightgray, paddingBottom: 30
    },
    sendtext: {
        fontSize: 16,
        top: 8,
        color: colors.white,
        fontFamily: Fonts.SourceSansProRegular

    },



})
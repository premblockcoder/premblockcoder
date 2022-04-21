import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { QRModal } from '../../components/QRModal';
import { Fonts } from '../../Res';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';

const Wallet = ({ navigation }) => {
    const [QRVisible, setQRVisible] = useState(false);
    const Data = [
        {
            coin: 'Bitcoin',
            date: '0.5 BTC',
            quantity: '$42,285.50',
            usdPrice: '-$399',
            Price: '-4.43%',
            Disc: 'My Portfolio',
            image: Images.BTC,
            Price2: '-4.43%',

        },
        {
            coin: 'Etherium',
            date: '0.23 ETH',
            quantity: '$2,342.40',
            usdPrice: '+$129',
            image: Images.eth,
            Price2: '+7.16%',

        },
        {
            coin: 'Tether',
            date: '0.5 USDT',
            quantity: '$1,333.50',
            usdPrice: '-$399',
            image: Images.tether,
            Price2: '-4.43%',
        },
        {
            coin: 'Etherium',
            date: '0.23 ETH',
            quantity: '$2,342.40',
            usdPrice: '+$129',
            image: Images.eth,
            Price2: '+7.16%',
        },
    ];

    const renderlist = (item, index) => {
        return (
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 31, paddingHorizontal: 20 }}
                onPress={() => navigation.navigate('BitcoinDetail', { Name: item?.coin })}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={item.image} />
                    <View style={{ paddingStart: 10 }}>
                        <Text style={{ fontSize: 18, fontFamily:Fonts.SourceSansProSemiBold, color: colors.black }}>{item.coin} </Text>
                        <Text style={{ fontSize: 13, color: colors.textlightgray, fontFamily:Fonts.SourceSansProRegular, lineHeight: 20 }}> {item.date} </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 18,fontFamily:Fonts.SourceSansProSemiBold, color: colors.black }}>{item.quantity} </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 13, color: colors.textlightgray, fontFamily:Fonts.SourceSansProRegular, lineHeight: 20 }}> {item.usdPrice} </Text>
                        <Text style={{ fontSize: 13, color: index % 2 ? colors.green : colors.red, fontFamily:Fonts.SourceSansProRegular, lineHeight: 20 }}> {item.Price2} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View>
                            <View style={styles.walletview}>
                                <Text style={styles.text}>Wallet #1 </Text>
                                <Image source={Images.arrows} style={{ marginLeft: 6 }} />
                            </View>
                            <Text style={styles.txt}> Main chain </Text>
                        </View>
                        <View style={styles.scan}>
                            <TouchableOpacity onPress={() => navigation.navigate('AddWallet')}>
                                <Image
                                    source={Images.plus} style={{ marginRight: 10,height:26,width:26, marginBottom: 4 }} />
                            </TouchableOpacity>
                            <Image source={Images.scanner} style={{ marginRight: 10 ,height:24,width:24,}} />
                            <TouchableOpacity onPress={() => navigation.navigate('AddToken')}>
                                <Image source={Images.add} style={{height:24,width:24,}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secondview}>
                        <Text style={styles.curr}>Current Balance </Text>
                        <Text style={styles.price}>$2,302.45 </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                            <View style={styles.code}>
                                <Text style={styles.textcode}> Dx5154...daDc </Text>
                            </View>
                            <Image source={Images.copy} style={{ marginLeft: 5 }} />
                            <Image source={Images.setting} style={{ marginLeft: 6 }} />

                        </View>
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
                    <View style={styles.lastview}>
                        <Text style={styles.title}> My Portfolio </Text>
                        <FlatList
                            data={Data}
                            renderItem={({ item, index }) => renderlist(item, index)} />

                    </View>
                </View>
                <QRModal Visible={QRVisible} setModalVisible={setQRVisible} />
            </SafeAreaView>
        </>
    )

}
export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
    },
    text: {
        fontSize: 22,
        color: colors.white,
        fontFamily:Fonts.SourceSansProSemiBold
    },
    txt: {
        color: colors.white,
        fontSize: 11,
        fontFamily:Fonts.SourceSansProRegular
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 22,
        paddingEnd: 18
    },
    walletview: {
        flexDirection: "row", alignItems: "center"
    },
    scan: {
        flexDirection: "row", alignItems: "center"
    },
    curr: {
        color: colors.white,
        fontSize: 18,
        fontFamily:Fonts.SourceSansProLight
    },
    price: {
        fontSize: 45,
        color: colors.white,
        fontFamily:Fonts.SourceSansProLight,
        marginTop: 5
    },
    secondview: {
        alignItems: "center",
        marginTop: 19,
    },
    code: {
        backgroundColor: colors.darkblue,
        borderRadius: 20,
        paddingHorizontal: 19,
        paddingVertical: 5
    },
    textcode: {
        color: colors.white,
        fontSize: 13,
        fontFamily:Fonts.SourceSansProLight
    },
    sendview: {
        flexDirection: "row", width: "100%", justifyContent: "space-evenly", marginTop: 33
    },
    sendtext: {
        fontSize: 16,
        marginTop: 8,
        color: colors.white,
        fontFamily:Fonts.SourceSansProRegular
    },
    lastview: {
        flex: 1,
        borderWidth: 1,
        marginTop: 22,
        backgroundColor: colors.white,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30
    },
    title: {
        marginTop: 22,
        marginStart: 14,
        fontSize: 22,
        fontFamily:Fonts.SourceSansProBold,
        color: colors.lightblack
    }



}) 
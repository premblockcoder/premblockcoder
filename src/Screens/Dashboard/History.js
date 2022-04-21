
import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity,FlatList,StatusBar } from 'react-native';
import { CustomHeader } from '../../components/common';
import { Fonts } from '../../Res';
import { colors} from '../../Res/Colors';
import { Images } from '../../Res/Images';

const TransactionHistory = () => {
    const Data = [
        {
            id: 1,
            bitcoinstatus: "Sent Bitcoin",
            status: "Pending",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.send2
        },
        {
            id: 2,
            bitcoinstatus: "Received Bitcoin",
            status: "Success",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.Recevied
        },
        {
            id: 3,
            bitcoinstatus: "Received Bitcoin",
            status: "Success",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.Recevied
        },
        {
            id: 4,
            bitcoinstatus: "Deposit Bitcoin",
            status: "Cancel",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.Deposit
        },
        {
            id: 5,
            bitcoinstatus: "Received Bitcoin",
            status: "Pending",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.Recevied
        },
        {
            id: 6,
            bitcoinstatus: "Sent Bitcoin",
            status: "Success",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.send2
        },
        {
            id: 7,
            bitcoinstatus: "Sent Bitcoin",
            status: "Success",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.send2
        },
        {
            id: 8,
            bitcoinstatus: "Sent Bitcoin",
            status: "Success",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.send2
        },
        {
            id: 9,
            bitcoinstatus: "Sent Bitcoin",
            status: "Success",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.send2
        }, {
            id: 10,
            bitcoinstatus: "Deposit Bitcoin",
            status: "Cancel",
            BTC: "-0.00142263 BTC",
            amount: "-$12.50",
            img: Images.Deposit
        },
    ]

    const render = (item) => {
        return (
            <TouchableOpacity style={styles.flatlist}>
                <Image source={item.img} />
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
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <CustomHeader text={"Transaction History"} back />
                <View style={styles.container}>
                <View>
                        <FlatList
                            data={Data}
                            renderItem={({ item }) => render(item)}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={styles.con} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )

}
export default TransactionHistory
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.white },
    flatlist: {
        flexDirection: "row",
        paddingHorizontal: 17,
        paddingVertical: 16,
        alignItems: "center",
        borderBottomWidth:1,
        borderColor:colors.borderlightgray,
    },
    sent: {
        fontSize: 15,
        color: colors.black,
        fontFamily:Fonts.SourceSansProSemiBold
    },
    status: {
        fontSize: 13,
        color: colors.textlightgray,
        marginLeft: 4,
        fontFamily:Fonts.SourceSansProRegular
    },
    btc: {
        fontSize: 12,
        color: colors.black,
        fontFamily:Fonts.SourceSansProSemiBold
    },
    Amount: {
        fontSize: 11,
        color: colors.textlightgray,
        fontFamily:Fonts.SourceSansProSemiBold

    },
    dot: {
        width: 8, height: 8, borderRadius: 10
    },
    con:{
        paddingBottom:8
    }

}) 

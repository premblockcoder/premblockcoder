
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, FlatList, StatusBar, TouchableOpacity, Image, Switch } from 'react-native';
import { CustomHeader } from "../../components/common/Header";
import { Fonts } from "../../Res";
import { colors } from '../../Res/Colors';
import { Images } from "../../Res/Images";
import { useDispatch, useSelector } from "react-redux";
import { crypto_Currencies } from "../../redux/actions/needs.actions";
import Loader from "../../components/common/Loader";
import { SvgUri } from 'react-native-svg';


const Crypto_currencies = ({ navigation }) => {
    const isLoading = useSelector(state => state.needs.isRequesting)
    const [currency, setcurrency] = useState()
    const dispatch = useDispatch()

    const get_Currencies = () => {
        dispatch(crypto_Currencies()).then(res => {
            setcurrency(res.payload.data.result)
        })
    }

    useEffect(() => {
        get_Currencies()
    }, [])

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.list}
                onPress={() => navigation.navigate('Transaction', { curr: item })}  >
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <SvgUri
                        uri={item.logo_url}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.cointext}>
                            {item.name}
                        </Text>
                        <Text style={styles.quantitytext}> {item.default_exchange_value}
                        </Text>
                    </View>
                </View>
                <View>
                    <Image source={Images.arrowright} style={{ tintColor: colors.black }} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <Loader isLoading={isLoading} />
                <View style={{ flex: 1, backgroundColor: colors.white }}>
                    <CustomHeader
                        back
                        text={"Crypto currencies"} />
                    <FlatList
                        data={currency}
                        renderItem={({ item }) => renderItem(item)}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
        </>
    );
}
export default Crypto_currencies

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    text: {
        color: colors.black,
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        fontWeight: "600",
    },
    text2: {
        color: colors.gray,
        fontSize: 13,
        marginLeft: 65,
    },

    Image: {
        height: 25,
        width: 25,
        marginTop: 28,
        marginLeft: 20
    },
    cointext: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '700',

    },
    quantitytext: {
        color: colors.textlightgray,
        fontSize: 13,
        marginTop: 4
    },
    btn: {
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.borderblue,

    },
    btntext: {
        color: colors.borderblue,
        fontSize: 16,
        fontFamily: Fonts.SourceSansProBold
    },
    list: {
        flexDirection: "row",
        borderBottomWidth: 0.4,
        borderBottomColor: colors.bordergray,
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    cointext: {
        color: colors.black,
        fontSize: 18,
        fontFamily: Fonts.SourceSansProSemiBold
    },
    quantitytext: {
        color: colors.textlightgray,
        fontSize: 13,
        marginTop: 4,
        fontFamily: Fonts.SourceSansProRegular
    },


})
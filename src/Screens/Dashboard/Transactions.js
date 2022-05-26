import React, { useState, useEffect, useRef } from 'react';
import {
    Text, SafeAreaView, View, StyleSheet, TouchableOpacity,
    ScrollView, StatusBar, TextInput, Image, ActivityIndicator
} from 'react-native';
import { Button, CustomHeader, InputText } from '../../components/common';
import { Fonts, Images } from '../../Res';
import { colors } from '../../Res/Colors';
import { useDispatch, useSelector } from "react-redux";
import { exchange_Trans } from '../../redux/actions/needs.actions';
import { SvgUri } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/common/Loader';
import { WebView } from 'react-native-webview';
import { Picker } from '@react-native-picker/picker'

const Transaction = ({ navigation, route }) => {
    const isLoading = useSelector(state => state.needs.isRequesting)
    const dispatch = useDispatch()
    const [walletaddress, setwalletaddress] = useState('')
    const [webUrl, setwebUrl] = useState()
    const [load, setload] = useState(false)
    const { curr } = route.params || {}
    const imagePickerRef = useRef()
    const [currency, setcurrency] = useState({
        fromCurrency: "USD",
        toCurrency: curr.ticker,
        fromAmount: "100",
        toNetwork: 'ETH',
        payoutAddress: walletaddress.address,
        fromNetwork: ''
    })

    console.log(currency, 'currrent----')

    useEffect(() => {
        const Address = AsyncStorage.getItem('Gen_wallet_user_data')
        Address.then(a => setwalletaddress(JSON.parse(a)))
    }, [])

    const _continue = () => {
        dispatch(exchange_Trans(currency)).then(res => {
            console.log(res?.result?.redirect_url)
            setwebUrl(res?.result?.redirect_url)
        })
    }

    const choose = () => {
        imagePickerRef.current.focus()
    }

    return (
        <>
            <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <Loader isLoading={isLoading} />
                <CustomHeader back text={"Transaction"} />
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ height: "100%" }}>
                    {webUrl ?
                        <View style={{ flex: 1 }}>
                            <WebView source={{ uri: webUrl }}
                            />
                        </View> :
                        <View style={styles.containter}>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.text}>Currency</Text>
                                <View style={[styles.view, { paddingHorizontal: 20 }]}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <SvgUri
                                            uri={curr?.logo_url}
                                        />
                                        <Text style={styles.text7}>{curr?.name}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.text}>Address</Text>
                                <View style={[styles.view, { paddingHorizontal: 20 }]}>
                                    <Text style={styles.text2}>{walletaddress?.address}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.text}>Amount</Text>
                                <View style={styles.input}>
                                    <Text style={styles.doller}>$</Text>
                                    <TextInput
                                        placeholder={"Amount"} placeholderTextColor={colors.textlightgray}
                                        keyboardType={'number-pad'}
                                        style={styles.main}
                                        onChangeText={(t) => setcurrency({ ...currency, fromAmount: t })}
                                        value={currency.fromAmount}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={styles.text}>Network</Text>
                                <TouchableOpacity style={[styles.view, { paddingHorizontal: 20, justifyContent: "space-between" }]}
                                    onPress={choose}>
                                    <Text style={styles.text2}>{currency.toNetwork}</Text>
                                    <Image source={Images.arrowright} style={{ tintColor: colors.black }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 25, }}>
                                <Button
                                    onPress={_continue}
                                    text={'Continue'}
                                    textstyle={{ fontSize: 16, }}
                                />
                            </View>
                        </View>
                    }
                </ScrollView>
                <Picker
                    ref={imagePickerRef}
                    style={{ display: 'none' }}
                    selectedValue={''}
                    onValueChange={(itemValue, itemIndex) => {
                        setcurrency({ ...currency, toNetwork: itemValue })
                    }}>
                    <Picker.Item label={'Select Network'} value={''} />
                    {
                        curr.networks.map(item =>
                            <Picker.Item label={item?.network} value={item?.network} />)
                    }
                </Picker>
            </SafeAreaView>
        </>
    )
}
export default Transaction

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 17,
    },
    text: {
        color: colors.black,
        fontFamily: Fonts.SourceSansProSemiBold,
        fontSize: 15,
    },
    view: {
        height: 52,
        width: "100%",
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 6,
        flexDirection: "row",
        paddingHorizontal: 14,
        alignItems: "center"

    },
    text7: {
        color: colors.black,
        fontFamily: Fonts.SourceSansProSemiBold,
        fontSize: 18,
        marginLeft: 8,
    },
    text2: {
        color: colors.darktextgray,
        fontFamily: Fonts.SourceSansProRegular,
        fontSize: 14,
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        height: 52,
        marginTop: 6,
        paddingHorizontal: 20,
        borderColor: colors.black,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center"
    },
    doller: {
        color: colors.textlightgray,
        fontSize: 15
    },
    main: {
        flex: 1,
        fontSize: 15,
        color: colors.black
    }

})
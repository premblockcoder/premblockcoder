import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Button, CustomHeader } from '../../components/common';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';


const VerifyMnemonic = ({ navigation }) => {
    const Data = ['gift', 'device', 'admit', 'modify', 'between',
        'flock', 'chat', 'frog', 'jacket', 'shoot', 'history',
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ flexDirection: "row", margin: 8 }} >
            <View style={{ borderWidth: 1, borderColor: colors.bordergray, borderRadius: 6, paddingVertical: 7, paddingHorizontal: 15 }}>
                <Text style={styles.text3}>{item}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <>
         <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <CustomHeader text={"Verify Mnemonic"} back />
                <View style={styles.containter}>
                    <View style={{ marginTop: 21, alignItems: "center" }}>
                        <Text style={styles.text}>Verify you recovery phrase</Text>
                        <Text style={styles.text2}>Please click the mnemonics by original {"\n"} order</Text>
                    </View>
                    <View style={styles.box}>
                    </View>
                    <View>
                        <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={4}
                            contentContainerStyle={{ marginTop: 20 }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <Button onPress={() => navigation.navigate('Wallet')}
                            styling={styles.resbtn}
                            text={'Verify'}
                            textstyle={{fontSize:16,fontWeight:"600"}}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
export default VerifyMnemonic

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    },

    text: {
        color: colors.blue,
        fontSize: 19,
        fontWeight: "700"
    },
    text3: {
        color: colors.black,
        textAlign: 'center',
        fontSize: 16,
    },
    box: {
        height: 99,
        width: "100%",
        borderWidth: 1,
        marginBottom: 20,
        borderColor: colors.bordergray,
        marginTop: 13,
        borderRadius: 3

    },
    text2: {
        color: colors.medtextgray,
        fontSize: 15,
        marginTop: 7,
        textAlign: "center"
    },
    resbtn: {
        marginBottom: 34,
        height:52,
        borderRadius:6,
        backgroundColor:colors.darkblue
    },
    text4: {
        color: colors.gray,
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 13

    },
    img: {
        marginTop: 7
    },
    text5: {
        color: colors.blue,
        fontSize: 16,
        fontWeight: 'bold'
    }
})
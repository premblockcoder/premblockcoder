import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, Modal } from 'react-native';
import { colors } from '../Res/Colors';
import { Images } from '../Res/Images';


export const QRModal = ({ setModalVisible, Visible, }) => {
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={Visible}
                animationType="fade"
                onRequestClose={() => {
                    setModalVisible(!Visible);
                }}
            >
                <View style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'rgba(1,1,1,0.7)',
                    paddingHorizontal: 24
                }}>
                    <View style={styles.view}>
                        <View style={styles.sentview}>
                            <View style={{ flex: 1, alignItems: "center", }}>
                                <Text style={styles.Text}>Wallet Address</Text>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Image
                                    source={Images.close}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 12 }}>
                            <Image
                                style={{ height: 212, width: 212, }}
                                source={Images.qr}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            paddingVertical: 11,
                            borderTopWidth: 1, borderTopColor: colors.bordergray,
                            justifyContent: "space-between"

                        }}>
                            <Text style={styles.text3}>1GLrWy2GuZi8rg7nT6dAJrW8kxJZZ6dHks</Text>
                            <Image
                                source={Images.copy}
                                style={{ tintColor: colors.extradarkgray }}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingVertical: 12,
                            borderTopWidth: 1, borderTopColor: colors.bordergray,
                            alignItems: "center"
                        }}>
                            <Image
                                source={Images.share}
                            />
                            <Text style={styles.text4}>Share this</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )


}

const styles = StyleSheet.create({

    view: {
        borderRadius: 10,
        backgroundColor: colors.white,
        width: "100%"

    },
    sentview: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomColor: colors.bordergray,
        borderBottomWidth: 1,
        paddingStart: 14,
        paddingEnd: 9,

    },
    text3: {
        color: colors.black,
        fontSize: 13
    },

    text4: {
        color: colors.blue,
        marginLeft: 9,
        fontSize: 15,
        fontWeight: "300"
    },
    Text: {
        color: colors.black,
        fontSize: 15,
        fontWeight: "500"
    },
})
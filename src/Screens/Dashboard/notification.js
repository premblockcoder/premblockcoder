import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Switch } from 'react-native';
import { CustomHeader } from '../../components/common';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';

const notification = ({ navigation }) => {
    const [value, setValue] = useState(false);
 
    const Data2 = [
        {
            id: 1,
            image: Images.bell,
            Text: 'Push Notifications',
            content: 'For daily update you will get it',
        },
        {
            id: 2,
            image: Images.bell,
            Text: 'SMS Notifications',
            content: 'Add Facebook, Twitter etc',
        },
        {
            id: 3,
            image: Images.bell,
            Text: 'Promotional Notifications',
            content: 'Add Facebook, Twitter etc',
        },
    ];



    return (
        <>
         <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader text={"Notifications"} back/>
                <View style={styles.containter}>
                 
                    <View style={{marginTop:10}}>
                                        
                        </View>
                    <View>
                        <FlatList
                            data={Data2}
                            renderItem={({ item }) => <NotificationCom item={item} />}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{marginTop:10}}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default notification

const NotificationCom = ({ item }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.view}>
            <Image source={item.image}
                style={styles.icon}
            />
            <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={styles.heading} >{item.Text}</Text>
                <Text style={styles.text}>{item.content}</Text>
            </View>
            <View>
                <Switch
                    trackColor={{ false: "#0000001A", true: colors.blue }}
                    thumbColor={isEnabled ? "#FFFFF" : "#FBFCFC"}
                    ios_backgroundColor="#0000001A"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 14,
        color: colors.extradarkgray,
        marginTop:5

    },
    icon: {
        height: 20,
        width: 20,
        tintColor:colors.gray
    },
    view: {
        borderBottomWidth: 1,
        borderBottomColor: "#CAC8DA34",
        justifyContent: "space-between",
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    heading: {
        color: colors.extralightblack,
        fontSize: 16,
    },
    Text: {
        color: colors.extralightblack,
        fontSize: 16,
        fontWeight:"300"

    }
})
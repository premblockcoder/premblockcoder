import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Switch } from 'react-native';
import { CustomHeader } from '../../components/common';
import { colors } from '../../Res/Colors';
import { Images } from '../../Res/Images';

const Settings = () => {
    const [value, setValue] = useState(false);
    const Data = [
        {
            id: 1,
            heading: "Profile Information",
            icon: Images.profile,
            text: "Change your account information",
        },
        {
            id: 2,
            heading: "Change Password",
            icon: Images.lockdark,
            text: "Change your password",
        },
        {
            id: 3,
            heading: "Payment Methods",
            icon: Images.walletdark,
            text: "Add your credit & debit cards",
        },
        {
            id: 4,
            heading: "Refer to Friends",
            icon: Images.arrowicon,
            text: "Get $10 for reffering friends",
        },
    ];
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

    setSwitchValue = (val, ind) => {
        const tempData = _.cloneDeep(this.state.Data);
        tempData[ind].switch = val;
        this.setState({ Data: tempData });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.view}>
            <Image source={item.icon}
                style={styles.icon}
            />
            <View style={{ flex: 1, marginLeft: 16, }}>
                <Text style={styles.heading} >{item.heading}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
            <Image source={Images.arrowright} style={{ tintColor: colors.black }} />
        </TouchableOpacity>
    );
    return (
        <>
         <StatusBar backgroundColor={colors.blue} barStyle={"light-content"} />
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.blue }} />
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader text={"Settings"} back right />
                <View style={styles.containter}>
                    <View >
                        <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ marginTop: 16 }}
                        />
                    </View> 
                    <View style={{marginTop:27}}>
                        <Text style={styles.Text}>NOTIFICATIONS</Text>
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

export default Settings

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
        height: 24,
        width: 24,
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
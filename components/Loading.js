import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from "react-native"

const Loading = () => {
    return (
        <View style={Style.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={Style.text}>볼봇의 개쩌는 날씨 앱</Text>
            <Text style={Style.text}>로드 중...</Text>
        </View>
    );
};

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 90,
        backgroundColor: "#0082FA"
    },
    text: {
        color: "white",
        fontSize: 30

    }
})

export default Loading;
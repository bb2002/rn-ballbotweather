import React from "react"
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from "react-native"
import { 
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    AntDesign,
    Fontisto 
} from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient"

const IconSize = 92
const IconColor = "white"

const WeatherData = {
    "Thunderstorm": {
        icon: <Ionicons name="ios-thunderstorm" size={IconSize} color={IconColor} />,
        gradient: ["#000046", "#1CB5E0"],
        title: "천둥 번개",
        content: "오늘은 비가 많이 내립니다."
    },
    "Drizzle": {
        icon: <Feather name="cloud-drizzle" size={IconSize} color={IconColor} />,
        gradient: ["#36D1DC", "#5B86E5"],
        title: "이슬비",
        content: "오늘은 비가 조금 내립니다."
    },
    "Rain": {
        icon: <Ionicons name="ios-rainy" size={IconSize} color={IconColor} />,
        gradient: ["#3A1C71", "#D76D77", "#FFAF7B"],
        title: "비",
        content: "오늘은 비가 내립니다."
    },
    "Snow": {
        icon: <FontAwesome name="snowflake-o" size={IconSize} color={IconColor} />,
        gradient: ["#6190E8", "#A7BFE8"],
        title: "눈",
        content: "눈이 내립니다. 같이 눈사람 만들레요?"
    },
    "Clear": {
        icon: <Ionicons name="ios-sunny" size={IconSize} color={IconColor} />,
        gradient: ["#22c1c3", "#fdbb2d"],
        title: "맑음",
        content: "나들이 가기 좋은 날 입니다."
    },
    "Clouds": {
        icon: <AntDesign name="cloud" size={IconSize} color={IconColor} />,
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "구름",
        content: "구름이 많습니다."
    },
    "Haze": { // == Mist, Smoke, Fog    (안개 낀 날)
        icon: <Fontisto name="fog" size={IconSize} color={IconColor} />,
        gradient: ["#3E5151", "#DECBA4"],
        title: "안개",
        content: "오늘은 별로 나가고 싶지 않네요."
    },
    "Dust": { // == Sand, Ash           (먼지 많은 날)
        icon: <Fontisto name="fog" size={IconSize} color={IconColor} />,
        gradient: ["#aa4b6b", "#6b6b83", "#3b8d99"],
        title: "먼지 많음",
        content: "공기 상태가 좋지 않네요."
    },
    "Squall": { // == Tornado           (바람 많이 부는 날)
        icon: <Feather name="wind" size={IconSize} color={IconColor} />,
        gradient: ["#8360c3", "#2ebf91"],
        title: "바람 많음",
        content: "바람이 많이 붑니다. 조심하세요."
    },
    "Error": {
        icon: <MaterialIcons name="error" size={IconSize} color={IconColor} />,
        gradient: ["#ff0000", "#ff0000"],
        title: "에러",
        content: "오늘 앱 상태가 좋지 않습니다."
    }
}

const getWeahterData = (weatherId) => {
    if(200 <= weatherId && weatherId < 300) {
        return WeatherData["Thunderstorm"]
    }
    if(300 <= weatherId && weatherId < 400) {
        return WeatherData["Drizzle"]
    }
    if(500 <= weatherId && weatherId < 600) {
        return WeatherData["Rain"]
    }
    if(600 <= weatherId && weatherId < 700) {
        return WeatherData["Snow"]
    }
    if(700 <= weatherId && weatherId < 800) {
        if(weatherId === 701 || weatherId === 711 || weatherId === 741 || weatherId === 721) {
            return WeatherData["Haze"]
        }
        if(weatherId === 731 || weatherId === 751 || weatherId === 762 || weatherId === 761) {
            return WeatherData["Dust"]
        }
        if(weatherId === 771 || weatherId === 781) {
            return WeatherData["Squall"]
        }
    }
    if(800 == weatherId) {
        return WeatherData["Clear"]
    }
    if(801 <= weatherId && weatherId < 900) {
        return WeatherData["Clouds"]
    }

    return WeatherData["Error"]
}


const Weather = ({data}) => {
    let weather = getWeahterData(800)
    const temp = Math.round(data.main.temp)

    return (
        <LinearGradient style={Styles.container} colors={weather.gradient}>
            <StatusBar barStyle="light-content" />
            <View style={Styles.IconContainer}>
                {weather.icon}
                <Text style={Styles.TextTemp}>{temp}℃</Text>
            </View>
            <View style={Styles.ContentContainer}>
                <Text style={Styles.TextCond}>{weather.title}</Text>
                <Text style={Styles.TextSubtitle}>{weather.content}</Text>
            </View>
        </LinearGradient>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    IconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ContentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 40,
        alignSelf: "stretch"
    },
    TextTemp: {
        fontSize: 38,
        fontWeight: "200",
        color: "white",
        marginTop: 16
    },
    TextCond: {
        fontSize: 38,
        color: "white",
        fontWeight: "300",
        marginBottom: 16
    },
    TextSubtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20
    }
})

export default Weather
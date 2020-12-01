import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, SafeAreaView } from 'react-native';
import Loading from './components/Loading';
import * as Location from "expo-location"
import axios from "axios"
import Weather from "./components/Weather"

const API_KEY = "4ac22468acab2fec541b2adc8e120b84"

class App extends Component {
	state = {
		isLoading: true,
		error: null,
		data: null
	}

	getWeather = async (latitude, longitude) => {
		const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
		this.setState({
			data
		})
	}

	getLocation = async () => {
		try {
			// 위치 정보를 요청한다.
			await Location.requestPermissionsAsync()

			// 위도 경도 날씨를 가져온다.
			const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync()
			await this.getWeather(latitude, longitude)
		
			this.setState({
				isLoading: false
			})
			
		} catch(ex) {
			Alert.alert("너가 어딨는지 모르겠다", "넘 슬프다")
			this.setState({
				error: ex
			})
		}
		
	}

	componentDidMount() {
		this.getLocation()
	}

	render() {
		const { isLoading, data, error } = this.state

		if(!isLoading && data && !error) {
			return <Weather data={data} />
		} else {
			return <Loading />
		}
	}
}

export default App;
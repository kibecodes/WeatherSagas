import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { connect } from "react-redux";
import { fetchWeatherRequest } from "../redux/actions/actions";

import { WeatherCardInfo } from "../components/weather.card.component";
import { SearchBar } from "../components/search.component";


export const WeatherScreen = ({ isLoading, weather, getWeather }) => {
    const handleQuery = (query) => {
        if(query !== "") {
            getWeather(query)();
        } else {
            console.log("houston we have a problem!")
        }
    }

    return(
        <>
            <View style={styles.container}>
                <View style={styles.search}>
                    <SearchBar
                       setQuery={handleQuery}
                    />
                </View>
                {isLoading || weather == null ? (
                    <Text>Loading...</Text>
                ) : (
                    <View style={styles.card}>
                        <WeatherCardInfo weather={weather}/>
                    </View>
                )}
            </View>
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.weather.isLoading,
    weather: state.weather.weather,
});

const mapDispatchToProps = {
    getWeather: fetchWeatherRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
    },
    search: {
        padding: 8,
    },
    card: {
        marginTop: 16,
    }
})

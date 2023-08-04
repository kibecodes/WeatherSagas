import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";


import { WeatherCardInfo } from "../components/weather.card.component";
import { SearchBar } from "../components/search.component";


const fetchData = async(query, setWeather, setIsLoading) => {
    setIsLoading(true)
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8d2f97e789064394953175937231306&q=${query}`)
        if(!response.ok) {
        throw new Error("Request failed")
        }
        const data = await response.json()
        const { current, location } = data;
        const { name, country } = location;
        const { temp_c, humidity, condition } = current;
        const { text, icon } = condition;

        const transformedData = {
            name,
            country,
            temp_c,
            humidity,
            text,
            icon
        }
        setWeather(transformedData)
    } catch (error) {
        console.log("An error occurred: ", error);
    }
    setIsLoading(false);
}

export const WeatherScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [query, setQuery] = useState("");
   
    useEffect(() => {
        if(query !== ""){
            fetchData(query, setWeather, setIsLoading);
        }
    }, [query])

    return(
        <>
            <View style={styles.container}>
                <View style={styles.search}>
                    <SearchBar
                       setQuery={setQuery}
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
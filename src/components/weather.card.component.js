import React from "react";
import { Card } from 'react-native-paper';
import { StyleSheet, Text, View } from "react-native";

export const WeatherCardInfo = ({ weather }) => {
    const {
        name, country, temp_c, humidity, text, icon
    } = weather;
     return (
        <>
            <View style={styles.container}>
                <Card key={country} style={styles.card_content}>
                    <Card.Title title={`Country: ${country}`} subtitle={`City: ${name}`}/>
                    <Card.Cover key={name} source={{icon}} />
                    <Card.Content>
                        <Text>{`Temperature:  ${temp_c}`}</Text>
                        <Text>{`Conditions:  ${text}`}</Text>
                        <Text>{`Humidity:  ${humidity}`}</Text>
                    </Card.Content>
                </Card>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
    },
    card_content: {
        padding: 8,
    }
})
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from "react-native-animatable";




export default function ResultScreen({route}) {
    const media = (yearsList) => {
        console.log(yearsList);

        resultado = 0;

        for(i = 0; i < yearsList.length; i++) {
            resultado = resultado + parseInt(yearsList[i]);
        }
        
        return resultado / yearsList.length;
    }

    return (
        <View style={styles.container}>
        <Animatable.View 
        animation="zoomInRight"
        style={styles.container}
        >
        
            <Text style={styles.title}> Esta pesquisa teve </Text>
            <View>
            
            <Text style={styles.result}>{route.params.yearsList.length}</Text>
            </View>
            <Text style={styles.title}> Participantes </Text>
            <Text style={styles.title}> A media de idade é </Text>
            <Text style={styles.media}>{media(route.params.yearsList)}</Text>
        </Animatable.View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3E50',
        alignContent: "center",
        padding: 25,
        alignItems: "center",

    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#ffff",
        marginTop: 55,

    },
    result: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#07a4",
        marginTop: 55,
    },
    media: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#030487",
        marginTop: 55,
    },

});

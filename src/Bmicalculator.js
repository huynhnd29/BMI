// import React from 'react'
import { StyleSheet, View, Text, Slider, TouchableOpacity, StatusBar } from 'react-native'
// import Slider from '@react-native-community/slider';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Foundation } from '@expo/vector-icons';
import React, { Component } from 'react'
import Gender from './Gender';
import Height from './Height';
import Weightage from './Weightage';
import { BOX_FEMALE } from './style';

export default class Bmicalculator extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.view1}>
                    <Text style={styles.bmitextstyle}>BMI CALCULATOR</Text>
                </View>

                <Gender />

                <Height />

                <Weightage />

                <TouchableOpacity style={styles.view5}>
                    <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>CALCULATE</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        width: "100%",
        backgroundColor: "#1d2236",
        alignItems: "center",
    },

    view1: {
        alignItems: "center",
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        borderBottomWidth: 8,
        borderBottomColor: "#181c31",
        marginBottom: 8,
    },
    bmitextstyle: {
        color: "#fff",
        fontSize: 24,
        marginBottom: 16
    },
    
    view5: {
        flex: 0.9,
        width: "90%",
        backgroundColor: "#e83d66",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        margin: 8
    }

});

// import React from 'react'
import { StyleSheet, View, Text, Slider, TouchableOpacity, StatusBar } from 'react-native'
// import Slider from '@react-native-community/slider';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Foundation } from '@expo/vector-icons';
import React, { Component } from 'react'

export default class Bmicalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 150
        };
    }

    change(value) {
        this.setState(() => {
            return {
                value: parseFloat(value)
            };
        });
    }
    render() {
        const { value } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.view1}>
                    <Text style={styles.bmitextstyle}>BMI CALCULATOR</Text>
                </View>
                <View style={styles.view2}>
                    <View style={styles.boxmale}>
                        <Foundation name="male-symbol" size={90} color="#51caef" />
                        <Text style={{ color: "#636e72" }}>MALE</Text>
                    </View>
                    <View style={styles.boxfemale} >
                        <MaterialCommunityIcons name="gender-female" size={90} color="red" />
                        <Text style={{ color: "#636e72" }}>FEMALE</Text>
                    </View>

                </View>
                <View style={styles.view3}>
                    <Text style={{ color: "#636e72" }}>HEIGHT</Text>
                    <Text t style={{ color: "#FFF", fontSize: 32, fontWeight: "bold"}}>{String(value)}</Text>
                    <Slider
                        style={{width:"100%",}}
                        step={1}
                        maximumValue={300}
                        onValueChange={this.change.bind(this)}
                        value={value}
                    />
                </View>
                <View style={styles.view4}>
                    <View style={styles.boxfemale}>
                        <Text style={{ color: "#636e72" }}>WEIGHT</Text>
                        <Text style={{ color: "#FFF", fontSize: 32, fontWeight: "bold", margin: 8 }}>50</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <AntDesign name="minuscircle" size={32} color="black" style={{ color: "gray", marginRight: 12 }} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <AntDesign name="pluscircle" size={32} color="black" style={{ color: "gray", marginLeft: 12 }} />
                            </TouchableOpacity>


                        </View>
                    </View>
                    <View style={styles.boxfemale} >
                        <Text style={{ color: "#636e72" }}>AGE</Text>
                        <Text style={{ color: "#FFF", fontSize: 32, fontWeight: "bold", margin: 8 }}>20</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <AntDesign name="minuscircle" size={32} color="black" style={{ color: "gray", marginRight: 12 }} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <AntDesign name="pluscircle" size={32} color="black" style={{ color: "gray", marginLeft: 12 }} />
                            </TouchableOpacity>


                        </View>
                    </View>

                </View>
                <TouchableOpacity style={styles.view5}>
                    <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>CALCULATE</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

// export default function Bmicalculator() {
//     state = {
//         sliteValue:0
//     }
//     return (

//     )
// }
const styles = StyleSheet.create({
    container: {
        flex: 10,
        width: "100%",
        backgroundColor: "#1d2236",
        alignItems: "center",
    },
    bmitextstyle: {
        color: "#fff",
        fontSize: 24,
        marginBottom: 16
    },
    view1: {
        alignItems: "center",
        flex: 1.5,
        width: "100%",
        justifyContent: "flex-end",
        borderBottomWidth: 8,
        borderBottomColor: "#181c31",
        margin: 8,

    },
    view2: {
        flex: 3.1,
        width: "90%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8
    },
    boxmale: {
        width: "47%",
        height: "100%",
        backgroundColor: "#24263b",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    boxfemale: {
        width: "47%",
        height: "100%",
        backgroundColor: "#323344",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    view3: {
        flex: 2.7,
        width: "90%",
        backgroundColor: "#323344",
        borderRadius: 8,
        margin: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    view4: {

        flex: 2.5,
        width: "90%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8
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

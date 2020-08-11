// import React from 'react'
import { StyleSheet, View, Text, Slider, TouchableOpacity, StatusBar, TouchableHighlight, Modal } from 'react-native'
// import Slider from '@react-native-community/slider';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Foundation } from '@expo/vector-icons';
// import React, { Component } from 'react'
import Gender from './Gender';
import Height from './Height';
import Weightage from './Weightage';
import { BOX_FEMALE } from './style';
import React, { useState } from 'react'

export default function Bmicalculator() {
    const [modalVisible, setModalVisible] = useState(false);
    const [weight, setweight] = useState(70);
    const [age, setage] = useState(5);
    const [height, setheight] = useState(150);
    const height1 = height*height/100
    const bmi =weight/height1
    return (
        <View style={styles.container}>
            <StatusBar style="light -content" />
            <View style={styles.view1}>
                <Text style={styles.bmitextstyle}>BMI CALCULATOR</Text>
            </View>

            <Gender />

            <Height  height={height} setheight={setheight}/>

            <Weightage weight={weight} age= {age}  setweight={setweight} setage={setage}/>

            <TouchableOpacity style={styles.view5} onPress = {() =>setModalVisible(true)}>
                <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>CALCULATE</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                visible={modalVisible}
                
            >
                <View style={{flex:1,backgroundColor:"#636e72"}}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={{justifyContent:"space-around",flexDirection:"row",marginBottom:16}}>
                            <Text style={styles.textstyle}> Thiếu cân </Text>
                            <Text style={styles.textstyle}> Bình Thường </Text>
                            <Text style={styles.textstyle}> Thiếu cân </Text>
                            <Text style={styles.textstyle1}> Béo Phì </Text>
                        </View>
                         <Text style={{fontSize:32 }}>BMI : {bmi.toFixed(2)}</Text>

                        <TouchableOpacity style={styles.modul} onPress = {()=> setModalVisible(false)}>
                                <Text style={{color:"#fff",fontWeight:"bold",fontSize:32}}> OK! </Text>
                        </TouchableOpacity>  
                    </View>
                </View>
            </Modal>

        </View>
    )
}

// export default class Bmicalculator extends Component {

//     render() {
//         return (

//         )
//     }
// }

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
    },
    modul:{
        width:"90%",
        height:48,
        backgroundColor:"#2d3436",
        marginTop:16,
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center",
        
    },
    textstyle:{
        color:"#fff",
        fontSize:20,
        borderRightWidth:1,
        borderRightColor:"#fff"
    },
    textstyle1:{
        color:"#fff",
        fontSize:20,
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
        ...BOX_FEMALE,
        backgroundColor: "#323344",
    },

});

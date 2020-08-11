import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import { BOX_FEMALE } from './style';
export default function Gender({gender,setGender}) {
    const [Male, setMale] = useState(styles.boxfemale);
    const [FeMale, setFeMale] = useState(styles.boxfemale);
    const femalechange = () => {
        setFeMale(styles.boxmale)
        setMale(styles.boxfemale)
    }
    const malechange = () => {
        setMale(styles.boxmale)
        setFeMale(styles.boxfemale)
    }
    return (                 
            <View style={styles.view2}>
                <TouchableOpacity style={Male}  onPress={()=>malechange()}>
                    <Foundation name="male-symbol" size={90} color="#51caef" />
                    <Text style={{ color: "#636e72" }}>MALE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={FeMale} onPress={()=>femalechange()}>
                    <MaterialCommunityIcons name="gender-female" size={90} color="red" />
                    <Text style={{ color: "#636e72" }}>FEMALE</Text>
                </TouchableOpacity>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 4.1,
        alignItems: "center"
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
    view2: {
        flex: 3.1,
        width: "90%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8,
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


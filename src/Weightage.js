import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, Foundation } from '@expo/vector-icons';
import { BOX_FEMALE } from './style';
export default function Weightage() {
    const [weight, setweight] = useState(5);
    const onPressUp = () => setweight(weight+1);
    const onPressDown = () =>{
        if(weight > 1){
            setweight(weight -1 );
        }
    } 

    const [height, setheight] = useState(5);
    const onPressUp2 = () => setheight(height +1);
    const onPressDown2 = () =>{
        if(height>1){
            setheight(height-1);
        }
    } 
    return (
        <View style={styles.view4}>
                    <View style={styles.boxfemale}>
                        <Text style={{ color: "#636e72" }}>WEIGHT</Text>
                        <Text style={{ color: "#FFF", fontSize: 32, fontWeight: "bold", margin: 8 }}>{weight}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <AntDesign name="minuscircle" size={32} color="black" style={{ color: "gray", marginRight: 12 }}
                                onPress={()=>onPressDown()} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <AntDesign name="pluscircle" size={32} color="black" style={{ color: "gray", marginLeft: 12 }} 
                                onPress={()=>onPressUp()} />
                            </TouchableOpacity>


                        </View>
                    </View>
                    <View style={styles.boxfemale} >
                        <Text style={{ color: "#636e72" }}>AGE</Text>
                        <Text style={{ color: "#FFF", fontSize: 32, fontWeight: "bold", margin: 8 }}>{height}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity>
                                <AntDesign name="minuscircle" size={32} color="black" style={{ color: "gray", marginRight: 12 }}
                                onPress={()=>onPressDown2()} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <AntDesign name="pluscircle" size={32} color="black" style={{ color: "gray", marginLeft: 12 }} 
                                onPress={()=>onPressUp2()}/>
                            </TouchableOpacity>


                        </View>
                    </View>

                </View>
    )
}
const styles = StyleSheet.create({
    view4: {

        flex: 2.5,
        width: "90%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8
    },
    boxfemale: {
        ...BOX_FEMALE,
        backgroundColor: "#323344"
    },
});


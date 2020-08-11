// import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react'

export default function Height({height,setheight}) {

    return (
        <View style={styles.view3}>
            <Text style={{ color: "#636e72" }}>HEIGHT</Text>
            <Text t style={{ color: "#FFF", fontSize: 32, fontWeight: "bold" }}>{height} <Text>cm</Text></Text>
            <Slider
                style={{ width: "100%", marginTop: 20 }}
                step={1}
                minimumValue={0}
                maximumValue={300}
                value={height}
                minimumTrackTintColor="#8e546c"
                maximumTrackTintColor="black"
                onValueChange={(value)=> setheight(value)}

            />
        </View>
    )
}

// export default class Genderheight extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 150
//         };
//     }

//     change(value) {
//         this.setState(() => {
//             return {
//                 value: parseFloat(value)
//             };
//         });
//     }
//     render() {
//         const { value } = this.state;
//         return (
//             <View style={styles.view3}>
//                 <Text style={{ color: "#636e72" }}>HEIGHT</Text>
//                 <Text t style={{ color: "#FFF", fontSize: 32, fontWeight: "bold" }}>{String(value)} <Text>cm</Text></Text>
//                 <Slider
//                     style={{ width: "100%", marginTop: 20 }}
//                     step={1}
//                     maximumValue={300}
//                     onValueChange={this.change.bind(this)}
//                     value={value}
//                     minimumTrackTintColor="#8e546c"
//                     maximumTrackTintColor="#060608"

//                 />
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    view3: {
        flex: 2.7,
        width: "90%",
        backgroundColor: "#323344",
        borderRadius: 8,
        margin: 12,
        alignItems: "center",
        justifyContent: "center"
    },
});

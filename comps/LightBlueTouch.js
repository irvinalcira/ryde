import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import LightBlueTouch from '../styles/LightBlueTouchStyles';

export default function LightBlueTouchable(){
    return(
<View>
    <TouchableOpacity style ={LightBlueTouch.TouchWrap}>
        <Text style={LightBlueTouch.TouchText}>See Full Schedule</Text>
    </TouchableOpacity>
</View>

)};
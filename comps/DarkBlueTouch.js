import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import DarkBlueTouch from '../styles/DarkBlueTouchStyles';

export default function DarkBlueTouchable(){
    return(
        <TouchableOpacity style={DarkBlueTouch.SecondTouchWrap}>
<Text style={DarkBlueTouch.SecondTouchText}>View All Stops</Text>
</TouchableOpacity>
    )
}


import React from 'react';
import {TouchableOpacity, Text,Image} from 'react-native';
import ScheduleTouch from '../styles/ScheduleTouchStyles';

export default function ScheduleTouchable(){
    return(
<TouchableOpacity style ={ScheduleTouch.TouchWrap}>
    <Image
              style={ScheduleTouch.time}
              source={require('../assets/icons/time.png')}
              />
        <Text style={ScheduleTouch.TouchText}>See Full Schedule</Text>
        <Image
              style={ScheduleTouch.next}
              source={require('../assets/icons/next.png')}
              />
    </TouchableOpacity>

)};
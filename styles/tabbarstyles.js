import React from 'react';
import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var TabBarStyles = StyleSheet.create({

Bottom:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:wp('120%'),
    bottom:0,
    left:"-10%",
    height:"11%",
    position:'absolute',
    backgroundColor:"white",
},
BotImg:{
    width:30,
    height:30,
    
},
TouchStyle:{
    justifyContent:"space-evenly",
    alignItems:"stretch"

},
Home:{
    width:wp('100'),
    fontSize:10,
    textAlign:"center"
}});

export default TabBarStyles;
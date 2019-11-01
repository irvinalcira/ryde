import React from 'react';
import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var BusRouteStyles=StyleSheet.create({
    container:{

    },
    TopView:{
        flex:0.5,
        backgroundColor:"#3971B3",
        padding:10,
        paddingTop: 40,
    },
    BusRouteFont:{
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:22,
        width:"100%",
    },

    BusRouteView:{
        flex:1,
        justifyContent:"center"
    },

    BusRouteViewAlt:{
        flex:1.7,
    },
    BackArrow:{
        height:15,
        width:15,
    },
    ImgStyles:{
        flexDirection:"row",
        width:"100%",
    },
    BotStyles:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    MidStyles:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        height:"80%"
    },
    WhiteBus:{
        height:60,
        width:60,
        margin:10 
    },
    ScrollView:{
        flex:1,   
    },
    BusView:{
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor:"#EEEEEE",
        textAlign:"center",
        paddingTop: "6%"
    },
    BusViewAlt:{
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor:"#DBDBDB",
        textAlign:"center",
        paddingTop: "6%"
    }
});

export default BusRouteStyles;
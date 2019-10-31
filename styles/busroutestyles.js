import React from 'react';
import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

  // Bus Routes
var styles=StyleSheet.create({
    busroutestyles:{

    },
    topview:{
        flex:0.5,
        backgroundColor:"#3971B3",
        padding:10,
        paddingTop: 40,
    },
    busroutefont:{
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:22,
        width:"100%",
    },

    busrouteview:{
        flex:1,
        justifyContent:"center"
    },

    busrouteview2:{
        flex:1.7,
    },
    backarrow:{
        height:15,
        width:15,
    },
    imgstyles:{
        flexDirection:"row",
        width:"100%",
    },
    botstyles:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    midstyles:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        height:"80%"
    },
    whitebus:{
        height:60,
        width:60,
        margin:10 
    },
    ScrollView:{
        flex:1,   
    },
    busview1:{
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor:"#EEEEEE",
        textAlign:"center",
        paddingTop: "6%"
    },
    busview2:{
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor:"#DBDBDB",
        textAlign:"center",
        paddingTop: "6%"
    }
});

export default styles;
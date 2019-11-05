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
        flex:1,
        width: wp('100%')
    },
    TopView:{
        flex:0.5,
        backgroundColor:"#3971B3",
        padding:10,
        paddingTop: 40,
    },
    TrainRouteFont:{
        color:"white",
        fontFamily:"Assistant-Bold",
        fontSize:22,
        width:"100%",
        textAlign:"center",
        marginLeft:-60
    },

    TrainRouteView:{
        flex:1,
        justifyContent:"center"
    },

    TrainRouteViewAlt:{
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
    WhiteTrain:{
        height:60,
        width:60,
        margin:10 
    },
    ScrollView:{
        flex:1,   
    },
    TrainView:{
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor:"#EEEEEE",
        textAlign:"center",
        paddingTop: "6%",
        fontFamily:"Assistant-Regular"
    },
    TrainViewAlt:{
        width: wp('100%'),
        height: hp('10%'),
        backgroundColor:"#DBDBDB",
        textAlign:"center",
        paddingTop: "6%",
        fontFamily:"Assistant-Regular"
    },
    StationText:{
        color:"white",
        margin:10,
        fontFamily:"Assistant-SemiBold",
        fontSize:20
        
    },
    StationAreaText:{
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:20
    }
});

export default BusRouteStyles;

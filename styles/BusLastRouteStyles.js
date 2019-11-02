import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var BusLastStyles=StyleSheet.create({
    Main:{
        flex:1,
        width:wp('100%')
    },
    TopView:{
        flex:1,
        backgroundColor:"#3971B3",
        padding:20,
        paddingTop: 40,
    },
    BusRouteFont:{
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:22,
        width:"100%",
        textAlign:"center"
    },

    BusRouteView:{
        flex:1,
        justifyContent:"center"
    },

    BusRouteView2:{
        flex:1
    },
    BackArrow:{
        height:15,
        width:15,
    },
    ImgStyles:{
    flexDirection:"row",
    },
    ImgStyles1:{
        justifyContent:"center",
        alignItems:"center"
    },
    ImgStyles2:{
     flexDirection:"row",
     backgroundColor:"black"
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
    Bottom:{
        flex:2,
    },
    ScheduleText:{
        fontFamily:"Assistant-Bold",
        fontSize:25,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:10
},
TimeCont:{
    backgroundColor:"#DCDCDC",
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    width:wp('90%'),
},
TimeWrap:{
    justifyContent:"center",
    alignItems:"center"
},
TimeText:{
    fontSize:20,
    margin:3,
    fontFamily:"Assistant-Bold"
},
TimeText2:{
    fontSize:20,
    margin:3,
    fontFamily:"Assistant-SemiBold"
}
});

export default BusLastStyles;
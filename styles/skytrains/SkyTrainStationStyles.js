import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var SkyTrainStationStyles = StyleSheet.create({
    Container:{
        flex:1,
        width: wp('100%')
    },
    
    Main:{
        flex:1,
    },
    TopView:{
        flex:0.4,
        backgroundColor:"#3971B3",
        padding:20,
        paddingTop: 40,
    },
    TrainRouteFont:{
        color:"white",
        fontFamily:"Assistant-Bold",
        fontSize:22,
        width:"100%",
        textAlign:"center",
        marginLeft:-13,
        marginTop:-7,
        width:"100%"
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
        flex:1,
    },
    ScheduleText:{
        fontFamily:"Assistant-Bold",
        fontSize:22,
        marginLeft:20,
        marginTop:10
},
TimeCont:{
    backgroundColor:"#DCDCDC",
    paddingLeft:20,
    paddingRight:20,
    marginTop:55,
    borderRadius:6,
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
},
TrainText:{
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:16
},
StopName:{
    color:"white",
    fontFamily:"Assistant-SemiBold"
},

StopNumber:{
    color:"white",
    fontFamily:"Assistant-SemiBold"
},
SchedView:{
    flexDirection:"row",
},
SchedText:{
    marginTop:8,
    marginLeft:10,
    width:"100%",
    fontFamily:"Assistant-SemiBold"
},
SchedText1:{
    marginTop:8,
    marginLeft:10,
    fontFamily:"Assistant-Regular"
},
OtherCont:{
    marginTop:20,
    width:wp('90%'),
},
OtherText:{
    fontFamily:"Assistant-Bold",
    fontSize:22
},
FirstTrainView:{
    backgroundColor:"#235CA3",
    justifyContent:"center",
    height:"20%",
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    marginTop:10
},
FirstTrainText:{
    textAlign:"center",
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:20
},
ColumnView:{
flexDirection:"row",
},
Days:{
    backgroundColor:"#D2D2D2",
    flex:0.5,
    paddingLeft:15,
    borderBottomLeftRadius:6,
},
FirstTime:{
    backgroundColor:"#DCDCDC",
    flex:0.5,
    alignItems:"center",
    borderBottomRightRadius:6
},
DaysText:{
    fontSize:16,
    padding:5,
    fontFamily:"Assistant-Regular"
},
SecondTrainView:{
    backgroundColor:"#235CA3",
    justifyContent:"center",
    height:"20%",
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
},
OtherCont2:{
    marginTop:-40,
    width:wp('90%'),
},
});

export default SkyTrainStationStyles;
import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var SkyTrainScheduleStyles = StyleSheet.create({
    Container: {
        flex:1,
        padding: 15,
        paddingTop: 20,
        width: wp('100%')
    },

    Title: {
    fontSize: 35,
    fontFamily: "Assistant-Bold"
    },

    Heading: {
        fontSize:20,
        marginTop:30,
        fontFamily:"Assistant-Bold"
    },
    Description: {
        fontSize:16,
        fontFamily:"Assistant-Regular"
    },

    TaxiButtonsContainer:{
        marginTop:10
    },


    ExpoLine: {
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:75,
        backgroundColor:"#235CA3",
        borderRadius: 8,
    },

    MilleniumLine:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:75,
        backgroundColor:"#F7D148",
        borderRadius: 8,
    },
    CanadaLine:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:75,
        backgroundColor:"#4298C2",
        borderRadius: 8,
    },
    ExpoText: {
        textAlign:"left",
        color:"white",
        fontFamily:"Assistant-Semibold",
        fontSize:20
    },
    MilleniumText: {
        textAlign:"left",
        color:"#141414",
        fontFamily:"Assistant-Semibold",
        fontSize:20
    },
    CanadaText: {
        textAlign:"left",
        color:"white",
        fontFamily:"Assistant-Semibold",
        fontSize:20
    },

    TextAltColor: {
        color:"#1970be",
    },

    IconCont: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height: "100%"
    },


    TextCont: {
        flex:4.5,
        justifyContent:'center',
        height: "100%"
    },

    Inp: {
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:20,
        padding:10,
        backgroundColor:"white",
        borderColor:"#D6D6D6",
        borderWidth:1,
    },

    TrainView: {
        marginTop:10
    },

    TrainImg: {
        width:22,
        height:22
    },
    ArrowImg: {
        width:12,
        height:12
    },
    Search: {
        marginLeft: 310,
        marginTop: -30,
        resizeMode : 'stretch',
        height: 25,
        width: 25,
    },


})

export default SkyTrainScheduleStyles;
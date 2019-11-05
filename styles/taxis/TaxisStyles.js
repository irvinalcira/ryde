import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var TaxisStyles = StyleSheet.create({
    Container: {
        flex:1,
        padding: 15,
        paddingTop: 20,
        width: wp('100%')
    },
    SearchBut: {
        marginTop: 15,
        height:50,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:"#3971b3",
        borderRadius: 3
    },
    SearchButText: {
        textAlign:"center",
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:17
    },

    TaxiButtonsContainer:{
        marginTop:10
    },

    TaxiBut: {
        marginTop:10,

        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:75,
        backgroundColor:"#ffffff",
        borderRadius: 8
    },

    TaxiButText: {
        textAlign:"left",
        color:"#141414",
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
        marginTop:15,
        padding:10,
        backgroundColor:"white",
        borderColor:"#D6D6D6",
        borderWidth:1,
    },

    TaxisView: {
        marginTop:10
    },

    TaxiImg: {
        width:22,
        height:22
    },
    ArrowImg: {
        width:12,
        height:12
    },



})

export default TaxisStyles;
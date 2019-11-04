import {StyleSheet} from 'react-native';

var BusSchedulesStyles =StyleSheet.create({
    BusStyles:{
        flex:1,
        padding:10,
        paddingTop: 40
    },
    BusSchedFont:{
    fontSize:40,
    marginTop: -20,
    fontFamily:"Assistant-Bold"
    },
    FindBusFont:{
        fontSize:25,
        paddingTop:10,
        fontFamily:"Assistant-Bold"
    },
    SearchBusFont:{
        paddingTop:5,
        fontSize:16,
        fontFamily:"Assistant-Regular"
    },
    SecondView:{
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:15,
        padding:10,
        backgroundColor:"white",
        borderColor:"#D6D6D6",
        borderWidth:1,
    },
    FirstButton:{
        marginTop: 30,
        padding:15,
        backgroundColor:"#4FA1CB",
    },
    FirstButtonTxt:{
        textAlign:"center",
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:18

    },
    ViewBusStyle:{
        fontSize:25,
        paddingTop:10,
        fontFamily:"Assistant-Bold"
    },
    ViewBusFont:{
        fontSize:21,
        paddingTop:30,
        fontFamily:"Assistant-Bold"
    },
    TypeInFont:{
        marginTop:10,
        fontSize:13,
        fontFamily:"Assistant-Regular"
    },

    ThirdView:{
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:9,
        padding:10,
        backgroundColor:"white",
        borderColor:"#D6D6D6",
        borderWidth:1
    },
    SecondButtonTxt:{
        textAlign:"center",
        color:"white",
        fontFamily:"Assistant-SemiBold",
        fontSize:18
    },
    SecondButton:{
        marginTop: 30,
        padding:15,
        backgroundColor:"#3971B3",
    },
    BarStyles:{
        width:"110%",
        height:70,
    },
    ImgStyles:{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
    },
    ImageStyle: {
        marginLeft: 300,
        marginTop: -30,
        resizeMode : 'stretch',
        height: 25,
        width: 25,
    },
})

export default BusSchedulesStyles;
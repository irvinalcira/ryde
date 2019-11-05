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
        backgroundColor: "#3971B3"
        
    },
    TopView:{
        flex:0.5,
        backgroundColor:"#3971B3",
        padding: 15,
    },

    // Blue part
    NavBar:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
    },

    NavTitle: {
        flex: 4,
        textAlign: "center",
    },

    ArrowCont: {
        flex: 0.5,
        justifyContent: "center"
    },
    
    BackArrow:{
        height:15,
        width:15,
    },

    //
    ImgStyles:{
        flexDirection:"row",
        width: "100%"
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


    // Content
    Bottom:{
        flex:1,
        backgroundColor: "#eee"
    },

    TimeCont:{
        backgroundColor:"#DCDCDC",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        borderRadius:6,
        width:wp('90%')
    },

    TimeWrap:{
        justifyContent:"center",
        alignItems:"center"
    },  


});

export default BusLastStyles;
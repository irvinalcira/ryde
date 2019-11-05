import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var NavBarStyles = StyleSheet.create({
    Container: {
        width: wp('100%'),
        height:70,
        backgroundColor:'#ffffff',
        flexDirection:'row'
    },

    Button:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:"center"
    },

    Img: {
        height:30,
        width:30
    },
    
    Text: {
        marginTop:5,
        fontSize:8.5
    }

})

export default NavBarStyles;
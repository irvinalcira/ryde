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
     
        justifyContent:'center',
        alignItems:"center"
    },

    Img: {
       
        height: 25,
        width: 25
    },
    
    Text: {
        marginTop:5,
        fontSize:8.5,
        color:"#333333"
    }

})

export default NavBarStyles;
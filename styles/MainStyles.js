import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var MainStyles = StyleSheet.create({
    Main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    }
})
export default MainStyles;

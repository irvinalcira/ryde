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
        marginTop: 20,

    },
    
    TaxisView: {
        marginTop:20,
    },
    dropdownMargins:{

    },
    TaxiButtonsContainer:{
    },

    ScrollViewContainer:{
        height:"80%",

    }
})

export default TaxisStyles;
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
        marginTop: 20
    },
    
    TaxiButtonsContainer:{
        marginTop:10
    },

    TextCont: {
        flex:4.5,
        justifyContent:'center',
        height: "100%"
    },

    TrainView: {
        marginTop:10
    }
})

export default SkyTrainScheduleStyles; //test
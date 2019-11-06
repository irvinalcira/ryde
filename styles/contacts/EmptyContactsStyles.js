import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var EContactsStyles = StyleSheet.create({
Container: {
    flex:1,
    padding: 15,
    marginTop: 20
},
})

export default EContactsStyles;
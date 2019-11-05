import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var AContactsStyles = StyleSheet.create({
Contacts: {
    flex:1,
    padding: 15,
    width: wp('100%')
},
TopBar: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
}
})

export default AContactsStyles;
import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var ContactsStyles = StyleSheet.create({
Contacts: {
    flex:1,
    padding: 10,
    paddingTop: 40,
    width: wp('100%')
},
Title: {
fontSize: 40,
marginTop: -20,
fontFamily: "Assistant-Bold"
},
Heading: {
    fontSize:20,
    paddingTop:40,
    fontFamily:"Assistant-Bold"
},
Description: {
    paddingTop:5,
    fontSize:16,
    fontFamily:"Assistant-Regular"
}
})

export default ContactsStyles;
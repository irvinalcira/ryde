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
    padding: 15,
    paddingTop: 40,
    width: wp('100%')
},
Title: {
  fontSize: 34,
  marginTop: -20,
  fontFamily: "Assistant-Bold"
},
FirstContainer: {
  marginTop: 40,
  display: "flex",
  flexDirection: "row",
},
Container: {
  // marginTop: 10,
  display: "flex",
  flexDirection: "row",
},
Name: {
  flex: 3,
  fontSize: 18,
  padding: 15,
  fontFamily: "Assistant-Regular"
},
ImageCont: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  // backgroundColor: "pink",
  width: wp('100%'),
  padding: 15
},
Image: {
  // backgroundColor: "purple",
  flex: 1,
  // marginRight: 30,
  resizeMode : 'stretch',
  width: 25
}

})

export default ContactsStyles;
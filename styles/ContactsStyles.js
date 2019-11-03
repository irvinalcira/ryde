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
    paddingTop: 20,
    width: wp('100%')
},
TitleCont: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
},
Title: {
  flex: 10,
  fontSize: 34,
  fontFamily: "Assistant-Bold"
},
TitleImg: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flex: 1
},
Settings: {
  width: 8,
  height: 25,
  marginTop: -20,
  resizeMode : 'stretch'
},
FirstContainer: {
  marginTop: 40,
  display: "flex",
  flexDirection: "row",
},
Container: {
  paddingTop: 5,
  paddingBottom: 5,
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
  resizeMode : 'stretch',
  width: 25
}

})

export default ContactsStyles;
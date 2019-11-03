import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var styles = StyleSheet.create({
Contacts: {
    flex:1,
    padding: 15,
    marginTop: 20,
    width: wp('100%')
},
TitleCont: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
},
Title: {
  flex: 10,
  fontSize: 34,
  fontFamily: "Assistant-Bold"
},
TitleImg: {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
},
Settings: {
  width: 6,
  height: 25,
  resizeMode : 'stretch'
},
FirstContainer: {
  marginTop: 40,
  display: "flex",
  flexDirection: "row",
},
Container: {
  marginTop: 5,
  marginBottom: 5,
  display: "flex",
  flexDirection: "row",
},
Name: {
  flex: 3,
  fontSize: 18,
  margin: 15,
  fontFamily: "Assistant-Regular"
},
ImageCont: {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  margin: 15
},
Image: {
  flex: 1,
  width: 25
}

})

export default styles;
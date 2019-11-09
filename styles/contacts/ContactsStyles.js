import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var ContactsStyles = StyleSheet.create({
Container: {
    flex:1,
    padding: 15,
    marginTop: 20,
    // width: wp('100%')
},
TitleCont: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
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
UserContainer: {
  marginTop: 5,
  marginBottom: 5,
  display: "flex",
  flexDirection: "row",
},
ImageCont: {
  display: "flex",
  flex: 1.5,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
},
ImageBox:
 {
   width: "100%",
   padding: 20,
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
Image: {
  height: 25,
  width: 26
}

})

export default ContactsStyles;
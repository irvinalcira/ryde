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
},
Title: {
  flex: 4,
  fontSize: 25,
  fontFamily: "Assistant-Bold",
  textAlign: "center"
},
Link: {
  flex: 1,
  fontSize: 17,
  fontFamily: "Assistant-Regular",
  color: "#0983fb",
  padding: 5
},
Heading: {
  fontSize: 20,
  marginTop: 40,
  fontFamily: "Assistant-Bold"
},
InpLabel: {
  marginTop: 15,
  fontSize: 16,
  fontFamily:"Assistant-Regular"
},
Inp: {
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: 15,
  padding: 10,
  backgroundColor: "white",
  borderColor: "#D6D6D6",
  borderWidth:1
}

})

export default AContactsStyles;